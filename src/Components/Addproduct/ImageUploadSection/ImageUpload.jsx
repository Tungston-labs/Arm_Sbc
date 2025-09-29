// ImageUploader.jsx
import React from "react";
import {
  UploadCard, UploadIcon, UploadText,
  FileInfo, HiddenInput, CardWrapper, Thumb
} from "./ImageUpload.styles";
import fileIcon from "../../../assets/AddProduct/imagesmode.png";

export default function ImageUploader({ images, onImagesChange }) {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images, file];
    onImagesChange(newImages);      
  };

  return (
    <CardWrapper>
      <UploadCard>
        <HiddenInput type="file" accept="image/*" onChange={handleFileChange}/>
        <UploadIcon>☁️</UploadIcon>
        <UploadText>Click to upload or drag and drop<br/>Max 20 MB</UploadText>

        {images.map((img, i) => (
          <FileInfo key={i}>
            <Thumb src={fileIcon} alt="file icon" />
            {img.name}
          </FileInfo>
        ))}
      </UploadCard>
    </CardWrapper>
  );
}
