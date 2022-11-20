import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { name, img, price, seller, stock, shipping, star } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const starSolid = <FontAwesomeIcon icon="fa-solid fa-star" />;

  return (
    <div className="single-pd-container">
      <div className="single-pd-img">
        <img src={img} alt="" />
      </div>
      <div className="single-pd-description">
        <h4>{name}</h4>
        <p>by: {seller}</p>
        <p>price: ${price}</p>
        <p>shipping cost: ${shipping}</p>
        <p>only {stock} left in stock - order soon</p>
        <Rating
          readonly
          initialRating={star}
          emptySymbol="fa fa-star-o "
          fullSymbol="fa fa-star "
        />
        <button onClick={() => props.handleAddToCart(props.product)}>
          {" "}
          {cartIcon}
          add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
