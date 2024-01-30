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
     let _file = {file:result,
      requirementIdColumnNumber : "2",
      requirementColumnNumber   : "3"
  }
     console.log("_file",_file);
      setSelectedFile(_file);
      handleUpload(_file)
    };
     reader.readAsDataURL(file);
    
  };
  const handleUpload = (file:any) => {
    if (file) {
        // Perform upload logic here
        console.log('Selected file:', file)
        fileuploader(file)
        // You can use PCF context to interact with the Power Apps platform
    } else {
        alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} />
      <p>{selectedFile ? `File name: ${selectedFileName}` : "No files uploaded yet"}</p>
      {/* <button onClick={handleUpload}>Upload</button> */}
      
    </div>
  )
}

export default FileUploadComponent
