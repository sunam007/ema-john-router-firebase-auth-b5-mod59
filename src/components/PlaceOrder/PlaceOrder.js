import React from "react";
import image from "../../images/giphy.gif";
import confirmation from "../../images/order confirmation.png";

const PlaceOrder = () => {
  return (
    <div>
      <center>
        <img src={confirmation} alt="" />
        <br />
        <img src={image} width="350" alt="" />
      </center>
    </div>
  );
};

export default PlaceOrder;
