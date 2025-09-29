import React, { useState } from "react";
import {
    LoginContainer,
    LoginBox,
    LogoWrapper,
    Logo,
    Title,
    Form,
    InputWrapper,
    Input,
    Label,
    EyeIcon,
    ForgotPassword,
    Button,
} from "./Login.style";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoImage from "../../assets/main/logo2.svg";
import backgroundImage from "../../assets/main/loginBg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationError, setValidationError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const validateForm = () => {
        if (!email && !password) {
            return "Empty Field: Please enter your email and password.";
        }
        if (!email) {
            return "Empty Field: Please enter your email address.";
        }
        if (!password) {
            return "Empty Field: Please enter your password.";
        }
       

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Invalid Format: Enter a valid email address (e.g., name@example.com).";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationMsg = validateForm();
        if (validationMsg) {
            setValidationError(validationMsg);
            return;
        }
        setValidationError(""); 
        
        dispatch(login({ email, password }))
            .unwrap()
            .then(() => {
                navigate("/dashboard"); 
            })
            .catch((err) => {
                if (err?.detail?.toLowerCase().includes("not found")) {
                    setValidationError("Unregistered Email: No account found with this email.");
                }
            });
    };

    return (
        <LoginContainer backgroundImage={backgroundImage}>
            <LoginBox>
                <LogoWrapper>
                    <Logo src={logoImage} />
                </LogoWrapper>

                <Title>Sign in</Title>

                <Form onSubmit={handleSubmit}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Label>Password</Label>
                    <InputWrapper>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <EyeIcon
                            onClick={() => setShowPassword(!showPassword)}
                            title={showPassword ? "Hide Password" : "Show Password"}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </EyeIcon>
                    </InputWrapper>

                    <Link
                        to="/reset-password"
                        style={{
                            display: "block",
                            textAlign: "right",
                            width: "100%",
                            marginTop: "-20px",
                            marginBottom: "20px",
                        }}
                    >
                        <ForgotPassword>Forgot password?</ForgotPassword>
                    </Link>

                    {(validationError || error) && (
                        <p style={{ color: "red", marginBottom: "10px" }}>
                            {validationError || error?.detail || "Login failed. Please try again."}
                        </p>
                    )}
                     
                    <Button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Log In"}
                    </Button>
                   
                </Form>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;
