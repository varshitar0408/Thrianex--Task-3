import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;