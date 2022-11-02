function FoodItem({ id, changeFoodName, name, country, price }) {
  return (
    <div style={{ backgroundColor: 'gray', padding: '2rem', border: '2px solid black', color: 'white', width: '300px' }}>
      <h2>Item no.{id} Name: {name}</h2>
      <h3>{country}</h3>
      <span>{price}</span>
      <input
        onChange={(event) => changeFoodName(id, event.target.value)}
        type="text"
        placeholder="change food name">
      </input>
    </div>
  );
}

export default FoodItem;