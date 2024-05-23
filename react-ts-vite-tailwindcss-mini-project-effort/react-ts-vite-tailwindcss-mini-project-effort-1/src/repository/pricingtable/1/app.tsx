import React, { useState, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
    const planslist = [
        {
          name: 'Basic',
          price: 10,
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
          name: 'Pro',
          price: 20,
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
          name: 'Premium',
          price: 30,
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
      ];
  return (
    <div>
        <PricingPlan plans={planslist}/>
    </div>
  )
}

export default CustomApp

interface PricingPlan{
    name:string;
    price:number;
    features:string[]
}

interface PTProps{
    plans:PricingPlan[]
}

const PricingPlan:React.FC<PTProps> = ({plans}) => {

    return(
        <>
         {plans.map((plan,index) => (
            <div className="pricing-plan" key={index}>
                <h2 className="plan-name">{plan.name}</h2>
                <p className="plan-price">${plan.price}/month</p>
                <ul className="plan-features">
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
                </ul>
                <button className="subscribe-button">Subscribe</button>
            </div>
         ))}
        </>
    )
}