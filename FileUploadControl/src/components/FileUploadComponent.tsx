import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { fileuploader } from '../apis/api';
const fileTypes = ["JPG", "PNG", "ZIP","PDF","DOCX"];
// import { FileUploaderState } from '../types/fileTypes'

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | any>(null);
  const [selectedFileName, setSelectedFileName] = useState<File | any>(null);
  const handleFileChange = (file:any) => {
    console.log("file*",file);
    setSelectedFileName(file?.name)
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      console.log("result",result);
     let _file = {file:result}
     console.log("_file",_file);
      setSelectedFile(_file);
    };
     reader.readAsDataURL(file);
    
  };
  const handleUpload = () => {
    if (selectedFile) {
        // Perform upload logic here
        console.log('Selected file:', selectedFile)
        fileuploader(selectedFile)
        // You can use PCF context to interact with the Power Apps platform
    } else {
        alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} />
      <p>{selectedFile ? `File name: ${selectedFileName}` : "no files uploaded yet"}</p>
      <button onClick={handleUpload}>Upload</button>
      
    </div>
  )
}

export default FileUploadComponent
