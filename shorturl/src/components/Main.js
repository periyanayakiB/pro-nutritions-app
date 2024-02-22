
 import React, { useState } from 'react';
import MenuItems from "./MenuItems";

import apple from '../assets/apple.jpg';
import banana from '../assets/banana.jpg';
import dates from '../assets/dates.jpg';
import grapes from '../assets/grapes.jpg';
import orange from '../assets/orange.jpg';
import chocolates from '../assets/chocolates.jpg';

const Main = () => {
  const menu = [
    { name: 'Apple', image: apple, cal: 81 },
    { name: 'Banana', image: banana, cal: 105 },
    { name: 'Dates', image: dates, cal: 28 },
    { name: 'Grapes(1 cup)', image: grapes, cal: 114 },
    { name: 'Orange', image: orange, cal: 65 },
    { name: 'Chocolate', image: chocolates, cal: 28 },
  ];

  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (itemName,quantity) => {
    const selectedItem = { name: itemName, quantity:quantity };
    console.log("selectedItem",selectedItem);
    setSelectedItems([...selectedItems, selectedItem]);
  };
  
 
  const calculateTotalCalories = () => {
    return selectedItems.reduce((total, item) => {
      const menuItem = menu.find(menuItem => menuItem.name === item.name);
      console.log(" menuItem",menuItem);
      return total + menuItem.cal * item.quantity;
    }, 0);
  };
  return (
    <div className="main">
      <div className="nav">
        <h2>Pro Nutritions</h2>
      </div>
      <div className="heading">
        <h3>Search</h3>
      </div>
      <div className="searchbox">
        <input
          type="search"
          className="searchbar"
          placeholder=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="contents">
        <div className="container">
          {menu.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) ).map((data, index) => (
              <MenuItems
                key={index}
                name={data.name}
                image={data.image}
                cal={data.cal}
                onClick={() => handleItemClick(data.name, 1)}
              />
            ))}
        </div>
        <div className="total">
          <h3>Today's Food {calculateTotalCalories()} cal</h3>
          
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>{item.quantity}{item.name}:</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main; 
