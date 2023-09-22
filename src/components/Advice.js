// src/Posts.js
import React, { useState, useEffect } from 'react';
import '../styles/advice.css';

function Advice() {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setAdvice(data.slip.advice)
    } catch (e){
      console.log(`erro ao buscar conselho: ${e}`)
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, [])

  const handleButton = () => {
    fetchAdvice()
  }

  return (
    <div className='advice-div'>
      <h1>Advice</h1>
      <p>{advice}</p>
      <button onClick={handleButton}>Get A New Advice</button>
    </div>
  );
}

export default Advice;
