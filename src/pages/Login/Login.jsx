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
import logoImg from "../../assets/main/logo2.svg";
import bgImg from "../../assets/main/loginBg.png";
import { Link } from "react-router-dom";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <LoginContainer bgImage={bgImg}>
            <LoginBox>
                <LogoWrapper>
                    <Logo src={logoImg} />
                </LogoWrapper>

                <Title>Sign in</Title>

                <Form>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter Email" />

                    <Label>Password</Label>
                    <InputWrapper>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
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
                        style={{ display: "block", textAlign: "right", width: "100%", marginTop: "-20px" , marginBottom: "20px" }}
                    >
                        <ForgotPassword>Forgot password?</ForgotPassword>
                    </Link>
                    <Button type="submit">Log In</Button>
                </Form>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;
