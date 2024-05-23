import React from "react";

const CustomApp = () => {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '30%' }}>
        <Card title="Card 1" content="Content of Card 1" />
        <Card title="Card 2" content="Content of Card 2" />
      </div>
      <div style={{ width: '30%' }}>
        <Card title="Card 3" content="Content of Card 3" />
        <Card title="Card 4" content="Content of Card 4" />
      </div>
      <div style={{ width: '30%' }}>
        <Card title="Card 5" content="Content of Card 5" />
        <Card title="Card 6" content="Content of Card 6" />
      </div>
    </div>
    </>
  )
}
export default CustomApp;

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
    </>
  );
};
