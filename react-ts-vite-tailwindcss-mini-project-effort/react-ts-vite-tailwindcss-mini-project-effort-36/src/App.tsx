import { useState } from 'react';
import './App.css'
import { calloutData, cardData } from './constants/constants'
import Card from './components/Card';

function App() {

  return (
    <>
     <div style={{ display: 'flex', gap: '1rem' }}>
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
    </>
  )
}

export default App
