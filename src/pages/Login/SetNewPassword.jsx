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
    BackLink,
    Button,
    Subtitle,
} from "./SetNewPassword.style";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoImage from "../../assets/main/logo2.svg";
import backgroundImage from "../../assets/main/loginBg.svg";
import { Link } from "react-router-dom";


const SetNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <LoginContainer bgImage={backgroundImage}>
            <LoginBox>
                <LogoWrapper>
                    <Logo src={logoImage} />
                </LogoWrapper>

                <Title>Set new password</Title>
                <Subtitle>
                  Enter new password
                </Subtitle>

                <Form>
                    <Label>Email</Label>

                    <InputWrapper>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Email"
                        />
                        <EyeIcon
                            onClick={() => setShowPassword(!showPassword)}
                            title={showPassword ? "Hide Password" : "Show Password"}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </EyeIcon>
                    </InputWrapper>

                    <Label>Confirm password</Label>
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

                    <Button type="submit">Submit</Button>
                </Form>

                <Link to="/login">
                    <BackLink>Back to Login</BackLink>
                </Link>

            </LoginBox>
        </LoginContainer>
    );
};

export default SetNewPassword;
