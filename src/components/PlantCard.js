import React,{ useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img 
        src={plant?.image || '/default-plant.jpg'} 
        alt={plant?.name || 'Plant image'}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/default-plant.jpg';
        }}
      />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        <button className={isSoldOut ? "" : 'primary'}
        onClick={toggleSoldOut}>{isSoldOut ? "Out of Stock" : "In Stock"}</button>
    </li>
  );
}

export default PlantCard;