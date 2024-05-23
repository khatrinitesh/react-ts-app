import React from "react";
// import './style.css';

const CustomApp = () => {
    const header = ['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5'];
    const data = [
        ['Content 1', 'Content 1', 'Content 1', 'Content 1', 'Content 1'],
        ['Content 2', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        ['Content 3', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        ['Content 4', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        ['Content 5', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        // Add more data as needed
      ];
    

  return (
    <>
    <ResponsiveTable header={header} data={data} />;
    </>
  );
};

export default CustomApp;

interface TableProps{
    header:string[];
    data:string[][];
}

const ResponsiveTable:React.FC<TableProps>  = ({header,data}) => {
    return(
        <>
        <div className="table-wrapper">
            <h2>Responsive Table</h2>
            <table className="fl-table">
                <thead>
                <tr>
                    {header.map((header, index) => (
                    <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    )
}   
