import React, { use } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTMzNzVhMDg3MGU2OTM3MGVmMDcwMmEyZGI1MzI2YiIsIm5iZiI6MTc0NTQ5MzQ0MC41Miwic3ViIjoiNjgwYTFkYzBiZmJkZjFmOGM1ODk5OWQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._ta6FE-4RbU_-J09xpIO8DldINIblaGuG9YxW9oWWGo'
    }
  };
  



    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
    },[]);
  return (
    <div className='player'>
      {/* <img src= {back_arrow_icon} alt="" className='back-arrow'  onClick={() => {navigate(-2)}}/> */}
      <img 
  src={back_arrow_icon} 
  alt="Back" 
  className="back-arrow" 
  onClick={() => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }} 
/>

      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'
       frameBorder='0' allowFullScreen></iframe>
       <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
