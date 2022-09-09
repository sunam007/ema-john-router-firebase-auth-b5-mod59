import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  const { cart } = props;
  let total = 0;
  for (let product of cart) {
    total = total + product.price;
  }
  //   console.log(total);
  return (
    <div>
      <h3>Order Summary</h3>
      <h4>items ordered: {props.cart.length}</h4>
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Cart;
