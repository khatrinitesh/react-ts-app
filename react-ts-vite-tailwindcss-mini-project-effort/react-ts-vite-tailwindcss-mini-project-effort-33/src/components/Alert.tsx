import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAlertStore } from './../store/useAlertStore';

const Alert: React.FC = () => {
  const { alerts, removeAlert } = useAlertStore();

  return (
    <>
      <div className="alert-container">
        <AnimatePresence>
          {alerts.map(({ id, message, type }) => (
            <motion.div
              key={id}
              className={`alert alert-${type}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => removeAlert(id)}
            >
              {message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Alert;
