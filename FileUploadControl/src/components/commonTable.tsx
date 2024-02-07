import * as React from "react";
import { getRequirmentType } from "../apis/api";

interface TableProps {
  data: any[];
  headers: any[];
  isTable: any; // Assuming the data is an array of objects with the structure you provided
  handleAIWithTable?:any
}

const CommonTable: React.FC<TableProps> = ({ data, headers, isTable ,handleAIWithTable }) => {
  console.log("data",data);
  
  const handleRowClick = async (rowData: any) => {
    // Handle the row click, you can do something with the rowData
   const responseData = await getRequirmentType(rowData)
    console.log("Clicked Row Data:",responseData);
    handleAIWithTable(responseData?.data)
    
  };

  return (
    <table>
      <thead>
        <tr>
          {headers?.map((data: any ,index:any) => {
            return  <th key={index} style={{ borderBottom: '2px solid #ddd', width: '200px',borderRight: '2px solid #ddd' }}>{data}</th>;
          })}
          {/* <th>Header</th>
          <th>HeaderNumber</th>
          <th>IsRequirement</th> */}
          {/* <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: any) =>
          isTable ? (
            <tr
              key={index}
              style={{
                backgroundColor:
                  item.IsRequirement === "Yes" ? "#add8e6" : "transparent",
              }}>
              <td style={{ borderBottom: '2px solid #ddd' }}>{item?.TableName}</td>
              <td style={{ width: '800px', overflow: 'auto', borderBottom: '2px solid #ddd' }}>
                {item?.TableColumns?.map((column: any) => column?.ColumnName).join(
                  ", "
                )}
              </td>
              <td>
              <button onClick={() => handleRowClick(item)}>AI</button>
            </td>
            </tr>
          ) : (
            <tr
              key={index}
              style={{
                backgroundColor:
                  item.IsRequirement === "Yes" ? "#add8e6" : "transparent",
              }}
            >
              <td>{item.Header}</td>
              <td>{item.HeaderNumber}</td>
              {/* <td>{item.IsRequirement}</td> */}
              {/* <td>
              <button onClick={() => handleRowClick(item)}>Click Me</button>
            </td> */}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default CommonTable;
