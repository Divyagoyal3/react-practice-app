import React, { use, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';




const TitleCards = ({tittle,category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTMzNzVhMDg3MGU2OTM3MGVmMDcwMmEyZGI1MzI2YiIsIm5iZiI6MTc0NTQ5MzQ0MC41Miwic3ViIjoiNjgwYTFkYzBiZmJkZjFmOGM1ODk5OWQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._ta6FE-4RbU_-J09xpIO8DldINIblaGuG9YxW9oWWGo'
    }
  };
  
 

const handleWheel = (e) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}

useEffect(() => { 
  fetch(`https://api.themoviedb.org/3/movie/${category?category :"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
},[]);
  return (
    <div className='title-cards'>
      <h2>{tittle ? tittle : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to = {`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.original_title} className='card-img' />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
