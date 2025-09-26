import React, { useState } from "react";
import { UploadCard, UploadIcon, UploadText, FileInfo, HiddenInput, CardWrapper, Thumb } from "./ImageUpload.styles";
import fileIcon from "../../../assets/AddProduct/imagesmode.png"; 

export default function ImageUploader() {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileData({ name: file.name, size: (file.size / (1024*1024)).toFixed(1) + " MB" });
  };

  return (
    <CardWrapper>
      <UploadCard>
        <HiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <UploadIcon>☁️</UploadIcon>
        <UploadText>
          Click to upload or drag and drop
          <br />
          Maximum file size 20 MB
        </UploadText>

        {fileData && (
          <FileInfo>
            <Thumb src={fileIcon} alt="file icon" />
            {fileData.name} – {fileData.size}
          </FileInfo>
        )}
      </UploadCard>
    </CardWrapper>
  );
}
