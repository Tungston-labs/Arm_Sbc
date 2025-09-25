import React from "react";
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

import logoImg from "../../assets/main/logo2.svg";
import bgImg from "../../assets/main/loginBg.png";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <ResetContainer bgImage={bgImg}>
      <ResetBox>
        <LogoWrapper>
          <Logo src={logoImg} alt="Logo" />
        </LogoWrapper>

        <Title>Reset password</Title>
        <Subtitle>
          Enter your registered email below, and we’ll send you a link to reset your password securely.
        </Subtitle>

        <Form>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Email" />
          <Link to="/verification" style={{ width: "100%" }}>
            <Button type="submit">Continue</Button>
          </Link>
        </Form>
        <Link to="/login">
          <BackLink>Back to Login</BackLink>
        </Link>
      </ResetBox>
    </ResetContainer>
  );
};

export default Resetpassword;
