import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [cartToggle, setCartToggle] = useState(false);
  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };
  const handleRemove = (price) => {
    if (item <= 0) {
      alert("No items to remove");
      return;
    }
    setTotal(total - price);
    setItem(item - 1);
  };
  const resetCart = () => {
    setTotal(0);
    setItem(0);
  };
  const toggleCart = () => {
    setCartToggle(!cartToggle);
  };
  return (
    <itemContext.Provider
      value={{ item, total, handleAdd, handleRemove, resetCart, toggleCart }}
    >
      {cartToggle && <CartModal toggle={toggleCart} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
