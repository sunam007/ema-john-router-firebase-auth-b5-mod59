import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCartInLocalStorage = getStoredCart();
      const cartWillBeStored = [];
      for (const key in savedCartInLocalStorage) {
        const productsStoredInTheCart = products.find(
          (product) => product.key === key
        );
        if (productsStoredInTheCart) {
          //set quantity of a single product
          const quantity = savedCartInLocalStorage[key];
          productsStoredInTheCart.quantity = quantity;
          cartWillBeStored.push(productsStoredInTheCart);
        }
      }
      setCart(cartWillBeStored);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
