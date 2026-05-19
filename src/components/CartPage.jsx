import { useContext } from "react";
import { CartContext } from "../context/Cart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    addToCart,
    removeCart,
    clearCart,
    deleteCart,
    getCartTotal,
  } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("cartItems", cartItems);
  const emptyCart = () => {
    clearCart();
    navigate("/products");
  };

  return (
    <div className="max-w-200 mx-auto w-full my-5 border border-gray-500 rounded-md shadow-md bg-white gap-8 p-10 text-black text-sm">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            className="flex justify-between items-center border-t border-gray-500"
            key={item.id}
          >
            <div className="flex gap-4">
              <img
                src={item.images}
                alt={item.title}
                className="rounded-md h-24"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-gray-600">Price: {item.price}</p>
                <p className="text-gray-600">
                  Discount: {item.discountPercentage}%
                </p>
                <p className="text-gray-600">In Stock: {item.stock}</p>
                <p className="text-gray-600">
                  Discount Price:
                  {(
                    item.price -
                    (item.price * item.discountPercentage) / 100
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 "
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 disabled:bg-gray-300"
                disabled={item.quantity <= 1}
                onClick={() => {
                  removeCart(item);
                }}
              >
                -
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:bg-gray-300"
                onClick={() => {
                  deleteCart(item);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button
            className="mt-3 px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              emptyCart();
            }}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <h1 className="text-lg font-bold">Your cart is empty</h1>
      )}
    </div>
  );
};

export default CartPage;
