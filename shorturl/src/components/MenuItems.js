import React, { useState } from 'react';

function MenuItem({name, image, cal, onClick}) {
  const [quantity, setQuantity] = useState(1);

  const handleAddItemClick = () => {
    onClick(name,quantity,cal); 
  };
 
  return (
    <div className="card">
      <img className="picture" src={image} alt={name} />
      <div className="details">
        <h4><b>{name}</b></h4><br />
        <p>{cal}</p>
      </div>
      <div className="count">
        <input 
          type="number" 
          min="0" 
          max="100" 
          className="countbar" 
          placeholder=""
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
        <button className="btn" onClick={handleAddItemClick}>+</button>
      </div>
    </div>
  );
}

export default MenuItem;
