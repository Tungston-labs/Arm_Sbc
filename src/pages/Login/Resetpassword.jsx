import React, { useState } from "react";
import {
  ResetContainer,
  ResetBox,
  LogoWrapper,
  Logo,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  Button,
  BackLink,
} from "./Resetpassword.style";

import logoImage from "../../assets/main/logo2.svg";
import backgroundImage from "../../assets/main/loginBg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpAction, resetForgotState } from "../../redux/authSlice";

const Resetpassword = () => {
  const [email, setEmail] = useState(""); 
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { forgotLoading, otpSent, forgotError } = useSelector(
    (state) => state.auth
  );

  
  const validateForm = () => {
    if (!email) return "Empty Field: Please enter your email address.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid Format: Enter a valid email address.";
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

    
    dispatch(sendOtpAction(email))
      .unwrap()
      .then(() => {
        
        localStorage.setItem("resetEmail", email);

        
        dispatch(resetForgotState());

        
        navigate("/verification", { state: { email } });
      })
      .catch(() => {
       
      });
  };

  return (
    <ResetContainer backgroundImage={backgroundImage}>
      <ResetBox>
        <LogoWrapper>
          <Logo src={logoImage} alt="Logo" />
        </LogoWrapper>

        <Title>Reset password</Title>
        <Subtitle>
          Enter your registered email below, and we’ll send you a code to reset your password securely.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {(validationError || forgotError) && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {validationError || forgotError?.detail || "Failed to send reset link. Please try again."}
            </p>
          )}

          <Button type="submit" disabled={forgotLoading}>
            {forgotLoading ? "Sending..." : "Continue"}
          </Button>
        </Form>

        <Link to="/login">
          <BackLink>Back to Login</BackLink>
        </Link>
      </ResetBox>
    </ResetContainer>
  );
};

export default Resetpassword;
