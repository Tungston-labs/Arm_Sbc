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
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const SetNewPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  let email = location.state?.email || localStorage.getItem("resetEmail");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { resetLoading, resetSuccess, resetError } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!newPassword || !confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill in both fields!",
      });
      return;
    }

  
    if (newPassword.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password should be at least 6 characters long.",
      });
      return;
    }

   
    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match!",
      });
      return;
    }

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Email Missing",
        text: "Email not found. Retry the reset process.",
      });
      return;
    }

   
    dispatch(
      resetPasswordAction({
        email: email.trim(),
        new_password: newPassword.trim(),
      })
    );
  };

  useEffect(() => {
    if (resetSuccess) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Password reset successfully!",
        timer: 2500,
        showConfirmButton: false,
      });
      navigate("/login");
    } else if (resetError) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: resetError.detail || "Failed to reset password.",
      });
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
    </LoginContainer>
  );
};

export default SetNewPassword;
