import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, img, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className="single-pd-container">
      <img src={img} alt="" />
      <div className="single-pd-description">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => handleRemove(key)}>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;
