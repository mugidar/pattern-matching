import React from "react";

const TableView = ({ data }) => {
  return (
    <table border={1} cellPadding={10} cellSpacing={0} >
        <tbody>
      {data.map((item) => (
        <tr key={item.id}>
            <td>{item.title}</td> 
            <td>{item.completed.toString()}</td>
        </tr>
      ))}
          </tbody>
    </table>
  );
};

export default TableView;
