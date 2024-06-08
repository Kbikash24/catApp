
import React from 'react';
import './CatCard.css'

const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <img src={cat.url} alt={cat.id} />
      <h2>{cat.breeds[0]?.name}</h2>
      <p>{cat.breeds[0]?.description}</p>
    </div>
  );
};

export default CatCard;
