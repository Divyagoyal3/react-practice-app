import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    let navigate = useNavigate();
    const [input, setInput] = useState('')

    function handleJoin() {
        navigate(`/room/${input}`)
    }

  return (
    <div id='home'>
      <input type="text" placeholder="Enter room id"  value = {input} onChange = {(e) => setInput(e.target.value)} />
      <button onClick={handleJoin}>Enter room</button>
    </div>
  )
}

export default Home
