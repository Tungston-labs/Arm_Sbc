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
  const { email } = location.state || {}; // get email from navigation state

  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputsRef = useRef([]);

  const { verifyLoading, verifySuccess, verifyError, otpSent } = useSelector(
    (state) => state.auth
  );

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
    if (!email) {
      toast.error("Email not found. Please go back and enter your email.");
      return;
    }
    dispatch(verifyOtpAction({ email, otp: enteredOtp }));
  };

  // Handle success/error effects
//   useEffect(() => {
//     if (verifySuccess) {
//       toast.success("OTP verified successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       navigate("/setnewpassword", { state: { email } });
//     } else if (verifyError) {
//       toast.error(verifyError.detail || "Invalid OTP", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   }, [verifySuccess, verifyError, navigate, email]);
useEffect(() => {
    if (verifySuccess) {
      // Pass email to SetNewPassword page
      navigate("/setnewpassword", { state: { email } });
    } else if (verifyError) {
      toast.error(verifyError.detail || "Invalid OTP");
    }
  }, [verifySuccess, verifyError, navigate, email]);
// In Verification page, after OTP is sent successfully
useEffect(() => {
    if (email) {
      localStorage.setItem("resetEmail", email);
    }
  }, [email]);
    
  const handleResend = () => {
    if (!email) return;
    dispatch(sendOtpAction(email))
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
          We sent a code to <br /> {email || "your email"}
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

          <Button type="submit" disabled={verifyLoading}>
            {verifyLoading ? "Verifying..." : "Verify"}
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
