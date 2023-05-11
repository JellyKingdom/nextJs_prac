export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let array = [2, 3, 4];

  return (
    <div>
      <h2 className='title'>Products</h2>

      {products.map((item, index) => {
        return (
          <div className='food' key={index}>
            <img src={`/food${index}.png`} className="food-img"/>
            <p>{index}</p>
            <h2>{item}</h2>
            <h4>$40</h4>
          </div>
        );
      })}
    </div>
  );
}
