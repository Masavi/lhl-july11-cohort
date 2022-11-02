import { useState } from 'react';
import FoodItem from './FoodItem';

function FoodList() {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Chilaquiles', country: 'Mexico', price: 2.50 },
    { id: 2, name: 'Gibnut', country: 'Brazil', price: 20 },
    { id: 3, name: 'Waffles', country: 'Belgium', price: 7 },
    { id: 4, name: 'Poutine', country: 'Canada', price: 10 },
  ]);

  const handleFoodName = (id, newName) => {
    console.log('🌞 Input from children component:', id, newName)
    const newState = foodItems.map(foodItem => {
      if(foodItem.id === id) {
        foodItem.name = newName;
        return foodItem;
      } else {
        return foodItem;
      }
    });

    setFoodItems(newState);
  }

  const foodList = () => {
    return foodItems.map(foodItem => {
      return <FoodItem
        key={foodItem.id}
        id={foodItem.id}
        changeFoodName={handleFoodName}
        name={foodItem.name}
        country={foodItem.country}
        price={foodItem.price} />
    })
  } 

  return ( foodList() );
}

export default FoodList;