import React, { useEffect, useState } from "react";

const FileUploadComponent = () => {

  const [fileUpload,setFileUpload] = useState('')

  const onFileChange = (event :any) => {
    // Update the state
    console.log("event",event);
    setFileUpload(event.target.files[0])
};

const onFileUpload = () => {

  const formData = new FormData();
  // Update the formData object
  formData.append(   "myFile",fileUpload
  );


 
};

  return (
    <div>
    
                <div>
                    <input
                    name="clikhere"
                        type="text"
                        onChange={onFileChange}

                    />
                     <input
                    name="clikhere"
                        type="file"
                        onChange={onFileChange}

                    />
                    {/* <button onClick={onFileUpload}>
                        Upload!
                    </button> */}
                </div>
    </div>
  )
}

export default FileUploadComponent
