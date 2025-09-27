import React, { useState, useRef, useEffect } from "react";
import {
  ResetContainer,
  ResetBox,
  LogoWrapper,
  Logo,
  Title,
  Subtitle,
  Form,
  OtpWrapper,
  OtpInput,
  Button,
  BackLink,
  ResendOtp,
} from "./Verification.style";

import logoImage from "../../assets/main/logo2.svg";
import backgroundImage from "../../assets/main/loginBg.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, sendOtp, resetFlags } from "../../redux/authSlice";

function Verification() {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputsRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  
  const passedEmail = location.state?.email;
  const { loading, error, otpVerified, email: reduxEmail } = useSelector(
    (state) => state.auth
  );
  const userEmail = reduxEmail || passedEmail;

  
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 5) {
      toast.error("Please enter the complete 5-digit OTP");
      return;
    }

    if (!userEmail) {
      toast.error("Email not found. Please restart the process.");
      return;
    }

    dispatch(verifyOtp({ email: userEmail, otp: enteredOtp }));
  };

  
  const handleResendOtp = () => {
    if (!userEmail) {
      toast.error("Email not found. Please restart the process.");
      return;
    }

    dispatch(sendOtp({ email: userEmail }))
      .unwrap()
      .then(() => toast.info("OTP resent to your email"))
      .catch(() => toast.error("Failed to resend OTP"));
  };

 
  useEffect(() => {
    if (otpVerified) {
      toast.success("OTP Verified Successfully!");
      dispatch(resetFlags());
      setTimeout(() => {
        navigate("/setnewpassword");
      }, 1500);
    }
    if (error) {
      toast.error(error);
      dispatch(resetFlags());
    }
  }, [otpVerified, error, navigate, dispatch]);

  return (
    <ResetContainer $backgroundImage={backgroundImage}>
      <ResetBox>
        <LogoWrapper>
          <Logo src={logoImage} alt="Logo" />
        </LogoWrapper>

        <Title>Verification</Title>
        <Subtitle>
          Verification code sent to your email. <br />
          Enter the code below to continue.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <OtpWrapper>
            {otp.map((digit, index) => (
              <OtpInput
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </OtpWrapper>

          <Button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </Button>

          <ResendOtp onClick={handleResendOtp}>Resend OTP</ResendOtp>
        </Form>

        <Link to="/login">
          <BackLink>Back to Log in</BackLink>
        </Link>
      </ResetBox>

      <ToastContainer />
    </ResetContainer>
  );
}

export default Verification;
