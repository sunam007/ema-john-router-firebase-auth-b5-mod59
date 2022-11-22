import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProducts = products.find((product) => product.key === key);
        if (addedProducts) {
          const quantity = savedCart[key];
          addedProducts.quantity = quantity;
          storedCart.push(addedProducts);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  let newCart = [];
  const handleAddToCart = (product) => {
    const exist = cart.find((pd) => pd.key === product.key);
    if (exist) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      product.quantity = product.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    // const newCart = [...cart, product];
    setCart(newCart);
    //save to local storage
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
    console.log(matchedProducts.length);
  };

  return (
    <>
      <div className="search-container">
        <input type="text" onChange={handleSearch} placeholder=" Search Here" />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/order">
              <button>Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
