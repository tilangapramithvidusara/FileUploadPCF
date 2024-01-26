import React, { useEffect, useState } from "react";
import FileUploadComponent from "./src/components/FileUploadComponent";

interface AppProps {
    config?: any;
    context:any
  }
  
const App: React.FC<AppProps> = ({ config ,context}) => {

    return (
     <><FileUploadComponent/></>
    )
}

export default App;