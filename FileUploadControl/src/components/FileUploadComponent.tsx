import * as React from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "ZIP"];
// import { FileUploaderState } from '../types/fileTypes'

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file)
  };
  const handleUpload = () => {
    if (selectedFile) {
        // Perform upload logic here
        console.log('Selected file:', selectedFile);
        // You can use PCF context to interact with the Power Apps platform
    } else {
        alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} />
      <p>{selectedFile ? `File name: ${selectedFile.name}` : "no files uploaded yet"}</p>
      <button onClick={handleUpload}>Upload</button>
      
    </div>
  )
}

export default FileUploadComponent
