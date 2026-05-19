import { useContext } from "react";
import { products } from "../auth-shoping-card";
import { CartContext } from "../context/Cart";
const Products = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="max-w-200 w-full mx-auto mt-2 p-4 flex justify-between items-center border border-gray-400 rounded-md"
          >
            <h1 className="">{product.title}</h1>
            <h2 className="">{product.price}</h2>

            <button
              className="bg-blue-500 py-2 px-5 text-white rounded-md cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
