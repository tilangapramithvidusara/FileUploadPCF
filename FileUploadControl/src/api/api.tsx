import axios from "axios";

export const fileuploader = async(file:any) => {
  console.log("Apifile",file);
    try{

    const _result = await axios.post('https://prod-06.uksouth.logic.azure.com:443/workflows/4f6828ee3f5746a6875392a9a572e685/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dsR8n1IeBHAQPfW904btPr06Eqg0Ugy7SyrkI6XrAtg',file)
    console.log("_result",_result);
    
    }catch(e){
      console.log('error');
      
    }
}