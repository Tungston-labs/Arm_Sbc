import React, { useState, useEffect } from "react";
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
  BackLink,
  Button,
  Subtitle,
} from "./SetNewPassword.style";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoImage from "../../assets/main/logo2.svg";
import backgroundImage from "../../assets/main/loginBg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetNewPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
let { email } = location.state || {};
if (!email) {
  // fallback to localStorage
  email = localStorage.getItem("resetEmail");
}


  // Get email from previous page

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { resetLoading, resetSuccess, resetError } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!email) {
      toast.error("Email not found. Please retry the reset process.");
      return;
    }

    dispatch(resetPasswordAction({ email, new_password: newPassword }));
  };

  useEffect(() => {
    if (resetSuccess) {
      toast.success("Password reset successfully!", { autoClose: 3000 });
      navigate("/login");
    } else if (resetError) {
      toast.error(resetError.detail || "Failed to reset password.");
    }
  }, [resetSuccess, resetError, navigate]);

  return (
    <LoginContainer backgroundImage={backgroundImage}>
      <LoginBox>
        <LogoWrapper>
          <Logo src={logoImage} alt="Logo" />
        </LogoWrapper>

        <Title>Set New Password</Title>
        <Subtitle>
          Enter your new password for <strong>{email}</strong>
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          {/* Show email as read-only */}
          
          <Label>New Password</Label>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <EyeIcon
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </InputWrapper>

          <Label>Confirm Password</Label>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <EyeIcon
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </InputWrapper>

          <Button type="submit" disabled={resetLoading}>
            {resetLoading ? "Submitting..." : "Submit"}
          </Button>
        </Form>

        <Link to="/login">
          <BackLink>Back to Login</BackLink>
        </Link>
      </LoginBox>

      <ToastContainer />
    </LoginContainer>
  );
};

export default SetNewPassword;
