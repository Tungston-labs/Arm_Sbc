// ImageUpload.jsx
import React, { useRef } from "react";
import {
  UploadCard,
  UploadIcon,
  UploadText,
  FileInfo,
  HiddenInput,
  CardWrapper,
  Thumb,
  RemoveButton,
} from "./ImageUpload.styles";
import fileIcon from "../../../assets/AddProduct/imagesmode.png";

export default function ImageUploader({ images = [], onImagesChange }) {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Replace remote URL if currently only a URL is present (edit scenario)
    const shouldReplace = images.length === 1 && !(images[0] instanceof File);
    const next = shouldReplace ? [file] : [...images, file];
    onImagesChange(next);
    e.target.value = ""; // allow same file reselect
  };

  const handleRemove = (index) => {
    const updated = images.filter((_, i) => i !== index);
    onImagesChange(updated);
  };

  return (
    <CardWrapper>
      <UploadCard onClick={() => inputRef.current?.click()} role="button">
        <HiddenInput
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          // do not set name here; we append manually to FormData
        />
        <UploadIcon>☁️</UploadIcon>
        <UploadText>
          Click to upload or drag and drop
          <br />
          Max 20&nbsp;MB
        </UploadText>

        {images.map((img, i) => {
          const isFile = img instanceof File;
          const previewSrc = isFile ? URL.createObjectURL(img) : img;
          const label = isFile ? img.name : String(img).split("/").pop();

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
