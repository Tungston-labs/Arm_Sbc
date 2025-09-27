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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpAction, sendOtpAction } from "../../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get email from navigation state or localStorage fallback
  const locationStateEmail = location.state?.email;
  const verifiedEmail = locationStateEmail || localStorage.getItem("resetEmail");

  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputsRef = useRef([]);

  // Get redux state
  const { forgotLoading, otpVerified, forgotError, otpSent } = useSelector(
    (state) => state.auth
  );

  // Handle OTP input change
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

  // Handle backspace key
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 5) {
      toast.error("OTP must be exactly 5 digits");
      return;
    }

    if (!verifiedEmail) {
      toast.error("Email not found. Please go back and enter your email.");
      return;
    }

    dispatch(verifyOtpAction({ email: verifiedEmail, otp: enteredOtp }));
  };

  // Navigate on OTP verified or show error
  useEffect(() => {
    if (otpVerified) {
      navigate("/setnewpassword", { state: { email: verifiedEmail } });
    } else if (forgotError) {
      toast.error(forgotError?.detail || "Invalid OTP");
    }
  }, [otpVerified, forgotError, navigate, verifiedEmail]);

  // Save email in localStorage
  useEffect(() => {
    if (verifiedEmail) {
      localStorage.setItem("resetEmail", verifiedEmail);
    }
  }, [verifiedEmail]);

  // Resend OTP
  const handleResend = () => {
    if (!verifiedEmail) {
      toast.error("Email not found. Cannot resend OTP.");
      return;
    }

    dispatch(sendOtpAction(verifiedEmail))
      .unwrap()
      .then(() => toast.info("OTP resent successfully!"))
      .catch(() => toast.error("Failed to resend OTP."));
  };

  return (
    <ResetContainer backgroundImage={backgroundImage}>
      <ResetBox>
        <LogoWrapper>
          <Logo src={logoImage} alt="Logo" />
        </LogoWrapper>

        <Title>Verification</Title>
        <Subtitle>
          We sent a code to <br /> {verifiedEmail || "your email"}
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

          <Button type="submit" disabled={forgotLoading}>
            {forgotLoading ? "Verifying..." : "Verify"}
          </Button>

          <ResendOtp onClick={handleResend}>Resend OTP</ResendOtp>
        </Form>

        <Link to="/login">
          <BackLink>Back to Log in</BackLink>
        </Link>
      </ResetBox>

      <ToastContainer />
    </ResetContainer>
  );
};

export default Verification;
