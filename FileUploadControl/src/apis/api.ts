import axios from "axios";

export const  fileuploader = async(file:any) => {
  console.log("Apifile",file);
    try{

    const _result = await axios.post('https://prod-06.uksouth.logic.azure.com:443/workflows/4f6828ee3f5746a6875392a9a572e685/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dsR8n1IeBHAQPfW904btPr06Eqg0Ugy7SyrkI6XrAtg',file)
    console.log("_result",_result);
    const TableToc = JSON.parse(_result?.data?.TOC)
    const TableJson = JSON.parse(_result?.data?.tableList)
     console.log("TableToc",TableToc,TableJson);
     
    
    return {type: "Success",data :{tableToc : TableToc,tableJson: TableJson}}
    }catch(e){
      console.log('error');
      return {type: "Error",data :[]}
    }
}

export const getRequirmentType =  async(tableData:any)=>  {
  try{
    console.log("tableData",tableData);
    
    const _result = await axios.post('https://rfpairetrive.azurewebsites.net/api/AzureOpenAiCheckRequirmentTable?code=KZimGZVVqVOfbfmJjEQ2QPh402rhY8sio0f_ymrDAXZ1AzFu307jAw==',{
      tableData,
  })
  console.log("getRequirmentTypeC",_result?.data);
    return {type: "Success",data :_result?.data}
    }catch(e){
      console.log('error');
      return {type: "Error",data :[]}
    }
}


export const  saveToTable = async(data:any) => {
  console.log("saveTable",data);
    try{

    const _result = await axios.post('https://pdfscan.azurewebsites.net/api/pdfScan?code=5vkvV6Uedfkt58nuwAMjRltZJgbtlyRq4AqPvDTHkSEiAzFuDZJ8Vg==',data)
    // console.log("_result",_result);
    // const TableToc = JSON.parse(_result?.data?.TOC)
    // const TableJson = JSON.parse(_result?.data?.tableList)
     console.log("TableToc",_result);
     
    
    // return {type: "Success",data :{tableToc : TableToc,tableJson: TableJson}}
    }catch(e){
      console.log('error');
      return {type: "Error",data :[]}
    }
}