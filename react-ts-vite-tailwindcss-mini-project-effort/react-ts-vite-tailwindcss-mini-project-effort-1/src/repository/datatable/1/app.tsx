import React from "react";

const CustomApp = () => {

    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 35 },
      ];
  return <div>
    <DataTable data={data}/>
  </div>;
};

export default CustomApp;

interface TableRow {
  [key: string]: string | number;
}

interface DataTableProps {
  data: TableRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, valueIndex) => (
                <td key={valueIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
