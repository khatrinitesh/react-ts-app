import React from 'react';

const IncludesComp:React.FC<IncludesProps> = ({users, nameToCheck }) => {
      // Check if any user.name matches nameToCheck
  const isIncluded = users.some(user => user.name === nameToCheck);

  return (
    <>
     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>includes() Example with Objects</h2>
      <p><strong>Users:</strong> {users.map(u => u.name).join(", ")}</p>
      <p><strong>Name to check:</strong> {nameToCheck}</p>
      <p>
        <strong>Result:</strong> {isIncluded ? "✅ Name found" : "❌ Name not found"}
      </p>
    </div> 
    </>
  );
}

export default IncludesComp;
