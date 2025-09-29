import React from "react";
import {
  UploadCard,
  UploadIcon,
  UploadText,
  FileInfo,
  HiddenInput,
  CardWrapper,
  Thumb,
  RemoveButton
} from "./ImageUpload.styles";
import fileIcon from "../../../assets/AddProduct/imagesmode.png";

export default function ImageUploader({ images = [], onImagesChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    onImagesChange([...images, file]);
  };

  const handleRemove = (index) => {
    const updated = images.filter((_, i) => i !== index);
    onImagesChange(updated);
  };

  return (
    <CardWrapper>
      <UploadCard>
        <HiddenInput type="file" accept="image/*" onChange={handleFileChange} />
        <UploadIcon>☁️</UploadIcon>
        <UploadText>
          Click to upload or drag and drop
          <br />
          Max 20&nbsp;MB
        </UploadText>

        {images.map((img, i) => {
          const isFile = img instanceof File;
          const previewSrc = isFile ? URL.createObjectURL(img) : img;
          const label = isFile ? img.name : img.split("/").pop();

          return (
            <FileInfo key={i}>
              <Thumb src={previewSrc || fileIcon} alt="preview" />
              {label}
              <RemoveButton
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleRemove(i);
                }}
                title="Remove image"
              >
                ✖
              </RemoveButton>
            </FileInfo>
          );
        })}
      </UploadCard>
    </CardWrapper>
  );
}
