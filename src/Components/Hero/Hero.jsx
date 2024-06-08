import React, { useState } from 'react'
import './Hero.css';
import Table from '../Table/Table'
import CatCard from '../CatCard/CatCard';
import axios from 'axios';





const Hero = () => {
    const [catData, setCatData] = useState(null);
  const [view, setView] = useState('card');

  const fetchRandomCat = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1');
    const cat = response.data[0];
    const fullCatDetails = await axios.get(`https://api.thecatapi.com/v1/images/${cat.id}`);
    setCatData(fullCatDetails.data);
  };
    
  return (
    
    <div className="hero container">
        <div className="hero-text">
            <h1>Welcome to Cat Paradise</h1>
            <p>Discover the world of adorable cats.</p>
            <div className="buttons">
        <button className='btn' onClick={() => { fetchRandomCat(); setView('card'); }}>Show Cat in Card</button>
        <button className='btn' onClick={() => { fetchRandomCat(); setView('table'); }}>Show Cat in Table</button>
      </div>
        </div>
        {catData && view === 'card' && <CatCard cat={catData} />}
        {catData && view === 'table' && <Table cat={catData} />}
    </div>
  )
}

export default Hero