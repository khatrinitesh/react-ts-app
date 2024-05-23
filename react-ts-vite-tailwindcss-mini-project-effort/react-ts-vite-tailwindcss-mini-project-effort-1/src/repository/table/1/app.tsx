import React from "react";

const CustomApp = () => {
    const tableData: TableData = {
        id: 1,
        headdata: ['ID', 'Name'],
        celldata: [
            ['1', 'John'],
            ['2', 'Pawan'],
            ['4', 'Vishal'],
            ['5', 'prathmesh']
        ],
    };
  return (
    <>
        <TableDataApp {...tableData}/>
    </>
  )
};

export default CustomApp;

interface TableData {
  id: number;
  headdata: string[];
  celldata: string[][];
}

const TableDataApp: React.FC<TableData> = ({ id, headdata, celldata }) => {
    return (
        <>
            <table className="w-full border">
                <thead>
                <tr>
                    {headdata.map((head, index) => (
                        <th className="border" key={index}>{head}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {celldata.map((cell, index) => (
                    <tr key={index}>
                        <td className="border">{cell[0]}</td>
                        <td className="border">{cell[1]}</td>
                        <td className="border">{cell[2]}</td>
                        <td className="border">{cell[3]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};
