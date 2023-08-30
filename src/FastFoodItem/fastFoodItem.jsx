const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div>
      <div className="card">{name}</div>
    </div>
  );
};
export default FastFoodItem;
