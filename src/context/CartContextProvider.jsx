import { useEffect, useState } from "react";
import { CartContext } from "./Cart";

export const CartContextProvider = ({ children }) => {
  // console.log("CartContextProvider working>>>>");
  const [cartItems, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const addToCart = (item) => {
    console.log("Add to cart working....");
    const ExistingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (ExistingCartItem && ExistingCartItem.quantity >= item.stock) {
      alert("Maximum stock reached!");
      return;
    }
    if (ExistingCartItem) {
      setcartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setcartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeCart = (item) => {
    const ExistingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (ExistingCartItem) {
      setcartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
    }
  };
  const deleteCart = (item) => {
    // console.log("Delete called");
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setcartItems(updatedCart);
  };
  const clearCart = () => {
    setcartItems([]);
  };
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (item.price - (item.price * item.discountPercentage) / 100).toFixed(2) *
          item.quantity,
      0,
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCart,
        clearCart,
        deleteCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
