import React, { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalTitle,
    ModalSubtitle,
    InputField,
    InputWrapper,
    Label,
    PasswordInput,
    ButtonGroup,
    DiscardButton,
    ApplyButton,
    EyeIcon,
    ClearText,
    HeaderText,
    HeaderIcon
} from "./ChangePasswordModal.styles";
import LockIcon from "../../assets/main/lock.svg";
import { Eye, EyeOff } from "lucide-react";

const ChangePasswordModal = ({ onClose }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleApplyChange = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Password changed!");
        onClose();
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <HeaderIcon>
                        <img src={LockIcon} alt="Change Password" />
                    </HeaderIcon>

                    <HeaderText>
                        <ModalTitle>Change password</ModalTitle>
                        <ModalSubtitle>
                            Change password for enhanced account security
                        </ModalSubtitle>
                    </HeaderText>
                </ModalHeader>

                <InputWrapper>
                    <Label>Current password *</Label>
                    <InputField>
                        <PasswordInput
                            type={showPassword.current ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter current password"
                        />
                        <EyeIcon onClick={() => togglePassword("current")}>
                            {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                        </EyeIcon>
                    </InputField>
                </InputWrapper>
                <InputWrapper>
                    <Label>New password *</Label>
                    <InputField>
                        <PasswordInput
                            type={showPassword.new ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter new password"
                        />
                        <EyeIcon onClick={() => togglePassword("new")}>
                            {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                        </EyeIcon>
                    </InputField>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                        Confirm new password * <ClearText onClick={() => setConfirmPassword("")}>Clear</ClearText>
                    </Label>
                    <InputField>
                        <PasswordInput
                            type={showPassword.confirm ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm new password"
                        />
                        <EyeIcon onClick={() => togglePassword("confirm")}>
                            {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </EyeIcon>
                    </InputField>
                </InputWrapper>

                <ButtonGroup>
                    <DiscardButton onClick={onClose}>Discard</DiscardButton>
                    <ApplyButton onClick={handleApplyChange}>Apply change</ApplyButton>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ChangePasswordModal;
