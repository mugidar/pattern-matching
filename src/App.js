import { useEffect, useState } from "react";
import "./App.css";
import ListView from "./components/listView/ListView";
import TableView from "./components/tableView/TableView";
function App() {
  const [data, setData] = useState([]);
  const [viewType, setViewType] = useState("list");

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((response) => response.json());
      setData(data.splice(0, 10));
    };
    getData();
  }, []);


  return (
    <div className="App">
      List
      <input
        checked={viewType == "list"}
        onChange={(e) => setViewType(e.target.name)}
        type="radio"
        name="list"
      />
      Table
      <input
        checked={viewType == "table"}
        onChange={(e) => setViewType(e.target.name)}
        type="radio"
        name="table"
      />
      <div>
        {
          {
            list: <ListView data={data} />,
            table: <TableView data={data} />
          }[viewType]
        }
      </div>
    </div>
  );
}

export default App;
