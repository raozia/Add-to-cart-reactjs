import { Outlet } from "react-router-dom";
import Header from "../Header";
import { CartContextProvider } from "../../context/CartContextProvider";

const Applayout = () => {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  );
};

export default Applayout;
