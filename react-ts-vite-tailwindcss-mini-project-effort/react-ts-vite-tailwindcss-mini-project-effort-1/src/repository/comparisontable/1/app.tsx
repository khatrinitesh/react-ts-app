import React from 'react'

const CustomApp = () => {

    const comparisonItems: ComparisonItem[] = [
        { name: 'Price', feature1: '$100', feature2: '$150' },
        { name: 'Size', feature1: 'Medium', feature2: 'Large' },
        { name: 'Weight', feature1: '10 lbs', feature2: '12 lbs' },
        { name: 'Color', feature1: 'Blue', feature2: 'Red' },
      ];



  return (
    <>
        <h2>Comparison Table</h2>
        <ComparisonTable items={comparisonItems} />
      </>
  )
}

export default CustomApp

interface ComparisonItem {
    name: string;
    feature1: string | number;
    feature2: string | number;
}

  
const ComparisonTable:React.FC<{items:ComparisonItem[]}> = ({items}) => {
    return(
        <>
        <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Item 1</th>
            <th>Item 2</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.feature1}</td>
              <td>{item.feature2}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    );
  };

  