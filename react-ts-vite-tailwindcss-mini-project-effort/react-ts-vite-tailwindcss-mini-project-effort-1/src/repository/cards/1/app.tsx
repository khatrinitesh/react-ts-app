import React from 'react';

interface CardData{
    id:number;
    title:string;
    desc:string;
}

const Cards:React.FC<{card:CardData}> =({card}) => {
    return(
        <div className='card'>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
        </div>
    )
}

const CardList:React.FC<{cards:CardData[]}> = ({cards}) => {
    return(
        <>
        <div className='cardList'>
        {cards.map(val => (
            <Cards key={val.id} card={val}/>
        ))}
        </div>
        </>
    )

}

const CustomApp = () => {
    const cardData:CardData[] = [
        { id: 1, title: 'Card 1', desc: 'Description for Card 1' },
        { id: 2, title: 'Card 2', desc: 'Description for Card 2' },
        { id: 3, title: 'Card 3', desc: 'Description for Card 3' }
    ]
  return (
    <>
        <CardList cards={cardData}/>
    </>
  )
}

export default CustomApp


