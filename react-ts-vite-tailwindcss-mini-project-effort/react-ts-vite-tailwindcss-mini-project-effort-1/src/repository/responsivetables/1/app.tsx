import React from 'react';

const CustomApp = () => {
    const data = [
        // rowspan 1
        { 
            field1: 'Value 1', 
            field2: 'Value 2', 
            field3: 'Value 3' 
        },
        // rowspan 2
        { 
            field1: 'Value 4', 
            field2: 'Value 5', 
            field3: 'Value 6' 
        },
      ];
  return (
    <>
      <ResponsiveTable data={data}/>
    </>
  )
}

export default CustomApp

interface TableProps {
    data: any[]; // Array of data for the table
  }
  
  const ResponsiveTable: React.FC<TableProps> = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3 text-left">Header 1</th>
              <th className="px-6 py-3 text-left">Header 2</th>
              <th className="px-6 py-3 text-left">Header 3</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="px-6 py-4">{item.field1}</td>
                <td className="px-6 py-4">{item.field2}</td>
                <td className="px-6 py-4">{item.field3}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };