import React from "react";
import Product from "./product/product"; // Import from the product folder
import "./product/product.css"; // Import CSS for styling

const products = [
  {
    id: 1,
    name: "Cool T-Shirt",
    price: "$25",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuuEJbsfqQmkWbVuivr7eVOkehbZIQ6SPfag&s",
  },
  {
    id: 2,
    name: "Stylish Jacket",
    price: "$60",
    image:
      "https://www.starkids.pk/cdn/shop/products/13_d93d39c6-33df-4cd3-a0e0-efb158a7de78.webp?v=1708147600",
  },
  {
    id: 3,
    name: "Trendy Sneakers",
    price: "$80",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs2P0HbpCSEQUzw2WhafTv5bQOrxUq_wOUg&s",
  },
];

const App = () => {
  return (
    <div className="product-container">
      {products.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default App;
