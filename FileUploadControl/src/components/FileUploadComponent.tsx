import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { fileuploader } from '../apis/api';

const fileTypes = ["JPG", "PNG", "ZIP", "PDF", "DOCX"];

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | any>(null);
  const [selectedFileName, setSelectedFileName] = useState<File | any>(null);
  const [requirementIdColumnNumber, setRequirementIdColumnNumber] = useState<string>("");
  const [requirementColumnNumber, setRequirementColumnNumber] = useState<string>("");

  const handleFileChange = (file: any) => {
    console.log("file*", file);
    setSelectedFileName(file?.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      console.log("result", result);
      let _file = {
        file: result,
        requirementIdColumnNumber: requirementIdColumnNumber,
        requirementColumnNumber: requirementColumnNumber
      };
      console.log("_file", _file);
      setSelectedFile(_file);
      
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform upload logic here
      console.log('Selected file:', selectedFile);
      fileuploader(selectedFile);
      // You can use PCF context to interact with the Power Apps platform
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
       <div style={{display:'flex'}}>
       
        <label>Requirement ID Column Number:</label>
        <input type="number" value={requirementIdColumnNumber}   style={{ width: '80px' ,marginLeft:'10px',marginRight:'13px'}} onChange={(e) => setRequirementIdColumnNumber(e.target.value)} />
     
    
        <label>Requirement Column Number:</label>
        <input type="number" value={requirementColumnNumber} style={{ width: '80px' ,marginLeft:'10px',marginRight:'13px'}} onChange={(e) => setRequirementColumnNumber(e.target.value)} />
      </div>
      
      <div>
      <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} />
      <p>{selectedFile ? `File name: ${selectedFileName}` : "No files uploaded yet"}</p>
       <button onClick={handleUpload}>Upload</button> 
      </div>
    </div>
  );
};

export default FileUploadComponent;
