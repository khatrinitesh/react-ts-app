import React from 'react';
import { PRICING_PLANS } from '../constants/constants';
import { motion } from "framer-motion";
import type { PricingPlan } from '../interface';
import '../styles/pricing.css';

const PricingTable:React.FC = () => {

  return (
    <>
       <div className="pricing-container">
      {PRICING_PLANS.map((plan: PricingPlan, index: number) => (
        <motion.div
          key={index}
          className={`pricing-card ${plan.isPopular ? "popular" : ""}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <h2 className="plan-title">{plan.title}</h2>
          <p className="plan-price">${plan.price}/mo</p>
          <ul className="plan-features">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="plan-button">Choose Plan</button>
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default PricingTable;
