function Table({ tableData }) {
  return (
    <table
      style={{
        borderWidth: "1px",
        borderColor: "#aaaaaa",
        borderStyle: "solid",
      }}
      id="table"
    >
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>edad</th>
        </tr>
      </thead>
      <tbody id="tabledata">
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
