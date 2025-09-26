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

const LogoutModal = ({ onConfirm, onCancel }) => {
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
                    <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
                    <CancelButton onClick={onCancel}>Cancel</CancelButton>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};

export default LogoutModal;
