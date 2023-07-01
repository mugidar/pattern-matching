import React from "react";

const ListView = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title} - {item.completed.toString()} </li>
      ))}
    </ul>
  );
};

export default ListView;
