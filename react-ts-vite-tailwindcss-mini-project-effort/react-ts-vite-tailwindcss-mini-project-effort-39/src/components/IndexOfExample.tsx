import React from 'react';
import type { IndexOfProps } from '../interface';

const IndexOfExample:React.FC<IndexOfProps> = ({users,nameToFind }) => {
     // Extract only the names for indexOf (primitive search)
  const userNames = users.map(user => user.name);
  const index = userNames.indexOf(nameToFind);
  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>indexOf() Example</h2>
      <p><strong>Users:</strong> {userNames.join(", ")}</p>
      <p><strong>Name to find:</strong> {nameToFind}</p>
      <p>
        <strong>Index found:</strong> {index >= 0 ? index : "Not found"}
      </p>
    </div>
    </>
  );
}

export default IndexOfExample;
