import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
  const [pattern, setPattern] = useState<string>("");

  const handlePatternSet = (pattern: string) => {
    setPattern(pattern);
  };

  const handlePatternMatch = (isMatch: boolean) => {
    if (isMatch) {
      alert("Pattern matched!");
    } else {
      alert("Pattern not matched!");
    }
  };
  return (
    <>
      <div className="relative h-screen">
        <PatternLock
          onPatternSet={handlePatternSet}
          onPatternMatch={handlePatternMatch}
        />
        {/* Your other content goes here */}
      </div>
    </>
  );
};

export default CustomApp;

interface PatternLockProps {
    onPatternSet: (pattern: string) => void;
    onPatternMatch: (isMatch: boolean) => void;
  }
  
  const PatternLock: React.FC<PatternLockProps> = ({
    onPatternSet,
    onPatternMatch,
  }) => {
    const [selectedCells, setSelectedCells] = useState<number[]>([]);
    const [patternSet, setPatternSet] = useState<string>("");
  
    const handleCellClick = (cellIndex: number) => {
      if (!selectedCells.includes(cellIndex)) {
        const updatedCells = [...selectedCells, cellIndex];
        setSelectedCells(updatedCells);
  
        const pattern = updatedCells.join("");
        if (pattern.length === 4) {
          onPatternSet(pattern);
        }
      }
    };
  
    const resetPattern = () => {
      setSelectedCells([]);
      setPatternSet("");
    };
  
    const verifyPattern = () => {
      const pattern = selectedCells.join("");
      const isMatch = pattern === patternSet;
      onPatternMatch(isMatch);
      resetPattern();
    };
  
    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Pattern Lock</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`pattern-cell ${
                selectedCells.includes(index) ? "selected" : ""
              }`}
              onClick={() => handleCellClick(index)}
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid #ccc",
                margin: "5px",
                background: "#fff",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button style={{ marginRight: "10px" }} onClick={resetPattern}>
            Reset
          </button>
          <button onClick={verifyPattern}>Verify</button>
        </div>
      </div>
    );
  };
  