import React, { useState, useRef } from "react";
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
    ResendOtp,   // 🔹 added
} from "./Verification.style";

import logoImg from "../../assets/main/logo2.svg";
import bgImg from "../../assets/main/loginBg.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

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

        if (enteredOtp === "123456") {
            toast.success("Entered OTP sent", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error("Entered OTP is wrong", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <ResetContainer bgImage={bgImg}>
            <ResetBox>
                <LogoWrapper>
                    <Logo src={logoImg} alt="Logo" />
                </LogoWrapper>

                <Title>Verification</Title>
                <Subtitle>
                    Enter We sent a code to <br /> Dummy@gmail.com
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
                                onChange={(e) =>
                                    handleChange(e.target.value, index)
                                }
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </OtpWrapper>
                    <Link to="/setnewpassword" style={{ width: "100%" }}>
                        <Button type="submit">Verify</Button>
                    </Link>

                    {/* 🔹 Resend OTP text */}
                    <ResendOtp onClick={() => toast.info("OTP resent!")}>
                        Resend OTP
                    </ResendOtp>
                </Form>

                <Link to="/login">
                    <BackLink>Back to Log in</BackLink>
                </Link>
            </ResetBox>

            {/* Toast container */}
            <ToastContainer />
        </ResetContainer>
    );
};

export default Verification;
