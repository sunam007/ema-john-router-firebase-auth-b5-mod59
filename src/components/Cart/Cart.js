import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let netTotal = 0;
  let totalQuantity = 0;
  for (let pd of cart) {
    if (!pd.quantity) {
      pd.quantity = 1;
    }
    totalQuantity = totalQuantity + pd.quantity;
    total = total + pd.price * pd.quantity;
    shipping = shipping + pd.shipping * pd.quantity;
    const tax = total * 0.1;
    netTotal = total + tax + shipping;
  }

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Items Ordered: {totalQuantity}</p>
      <p>Items: ${total.toFixed(2)}</p>
      <p>Shipping and Handling: ${shipping.toFixed(2)}</p>
      <p>Estimated Tax: ${(total * 0.1).toFixed(2)}</p>
      <h4 className="order-total-text">Order Total: ${netTotal.toFixed(2)} </h4>
      {props.children}
    </div>
  );
};

export default Cart;
