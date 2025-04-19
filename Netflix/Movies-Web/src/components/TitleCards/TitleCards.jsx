import React, { use } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { useEffect } from 'react';




const TitleCards = ({tittle,category}) => {
  const cardsRef = React.createRef();

const handleWheel = (e) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}

useEffect(() => { 
  cardsRef.current.addEventListener('wheel',handleWheel)
},[]);
  return (
    <div className='title-cards'>
      <h2>{tittle ? tittle : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt={card.name} className='card-img' />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
