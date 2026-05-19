import { useNavigate } from "react-router-dom";
import { logout } from "./Auth";
import { useContext } from "react";
import { CartContext } from "../context/Cart";
// import { useState } from "react";
// import Cart from "./Cart";

const Header = () => {
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const { cartItems } = useContext(CartContext);
  const toggle = () => {
    // console.log("modal toggled");
    // setShowModal(!showModal);
    navigate("/cart");
  };
  return (
    <div className="bg-gray-200 shadow-md">
      <div className="flex justify-between py-2 px-5">
        <div>
          <h1 className="font-bold text-2xl">Logo</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <button
              className="cursor-pointer bg-blue-500 text-white px-5 py-2 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div>
            <button
              onClick={toggle}
              className="font-semibold text-xl cursor-pointer"
            >
              Cart {cartItems.length}
            </button>
          </div>
        </div>
      </div>
      {/* {showModal && (
        <div className="fixed right-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[500px] max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={toggle}
            >
              Close
            </button>

            <Cart />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;
