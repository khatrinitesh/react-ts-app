import React from 'react'

const CustomApp = () => {
    const data = [
        { property1: 'Value 1', property2: 'Value 2' },
        { property1: 'Value 3', property2: 'Value 4' },
        // Add more data objects if needed
      ];
  return (
    <div>
        <h1>Zebra Table Example</h1>
        <ZebraTable data={data} />
    </div>
  )
}

export default CustomApp



interface TableProps {
    data: any[]; // Change any[] to your data type
  }

  const ZebraTable: React.FC<TableProps> = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            {/* Add more headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f2f2f2' }}>
              <td>{item.property1}</td> {/* Replace property1 with actual property */}
              <td>{item.property2}</td> {/* Replace property2 with actual property */}
              {/* Add more cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };