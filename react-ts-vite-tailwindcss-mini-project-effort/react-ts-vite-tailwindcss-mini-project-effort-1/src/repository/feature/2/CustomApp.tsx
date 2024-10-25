import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAppleAlt, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { FeatureData } from "./constants";
import './style.css'

// Add icons to the library
library.add(faCoffee, faAppleAlt, faUser);

const FinalApp = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default FinalApp;

function Card() {

    const itemsPerColumn = 6; // Number of items in each column
    const columns = [[], []]; // Initialize two columns

    // Distribute items into two columns
    FeatureData.forEach((item, index) => {
        columns[index % 2].push(item);
    });

    // const employees = ['a1','b1','c1','d1','e1']

    const employees = [
        {
            id:1,
            name:'sachin'
        },
        {
            id:2,
            name:'rahul'
        },
        {
            id:3,
            name:'kapil'
        },
        {
            id:4,
            name:'vishal'
        },
        {
            id:5,
            name:'robin'
        },
    ]

  return (
    <>
      <div className="container">
          <div className="row ">
          {columns.map((column, colIndex) => (
                    <div key={colIndex} className="col-lg-6 col-md-12 mb-4">
                        {column.map((val, index) => (
                            <div key={index} className="card shadow p-3 mb-3">
                                <div className="iconBox">
                                    <FontAwesomeIcon icon={['fas', val.icon]} size="2x" />
                                </div>
                                <div className="service-item">
                                    <h4>{val.headTitle}</h4>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
      </div>
      <ul className="m-0 list-style-none">
      {employees.map((val) => {
                const { id, name } = val;
                return (
                    <li key={id}>
                        <h2 className="m-0">{`ID ${id} - Name: ${name}`}</h2>
                    </li>
                );
            })}
      </ul>
    </>
  );
}
