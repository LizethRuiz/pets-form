import "./App.css";
import { useState } from "react";
import axios from "axios";
import Table from "./components/table";

function App(props) {
  const [datos, setDatos] = useState({ name: "", age: 0, success: false });
  const [tableData, setTableData] = useState([
    { name: "alfa", age: "3", id: 1 },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("You clicked submit.");
    console.log("Nombre es:" + datos.name);
    let { data } = await axios.post(
      "https://60404a03f34cf600173c7cff.mockapi.io/api/sample/pets",
      {
        name: datos.name,
        age: datos.age,
      }
    );
    console.log("Agregó: " + JSON.stringify(data));
    if (data) {
      setDatos({ ...datos, success: true });
      console.log("DATA TABLE: " + JSON.stringify([...tableData, data]));
      setTableData([...tableData, data]);
    }
  }

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Edad:
            <input
              type="text"
              name="age"
              id="age"
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" id="submit" />
        </form>
        <label id="success">
          {datos.success === true ? "se agrego " + datos.name : "se agregó"}
        </label>
        <Table tableData={tableData} />
      </header>
    </div>
  );
}

export default App;
