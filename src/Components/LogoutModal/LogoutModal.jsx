import React from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalImage,
    ModalMessage,
    ButtonGroup,
    ConfirmButton,
    CancelButton,
} from "./LogoutModal.Styles";

import logoutImg from "../../assets/main/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice"; // 🔑 import logout thunk
import { useNavigate } from "react-router-dom"; // if using react-router

const LogoutModal = ({ onCancel }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConfirm = async () => {
        try {
            await dispatch(logout()).unwrap(); // ✅ call API + clear tokens
            navigate("/login"); // redirect after logout
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalImage>
                    <img src={logoutImg} alt="logout" />
                </ModalImage>
                <ModalMessage>
                    Are you sure you want <br /> to log out ?
                </ModalMessage>
                <ButtonGroup>
                    <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
                    <CancelButton onClick={onCancel}>Cancel</CancelButton>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};

export default LogoutModal;
