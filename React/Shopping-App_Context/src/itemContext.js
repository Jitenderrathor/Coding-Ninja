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
  const [cart, setCart] = useState([]);
  const [cartToggle, setCartToggle] = useState(false);
  const handleAdd = (newItem) => {
    const existingItem = cart.find((i) => i.id === newItem.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
    setTotal(total + newItem.price);
    setItem(item + 1);
  };
  const handleRemove = (itemToRemove) => {
    console.log(itemToRemove);
    const itemExists = cart.find((i) => i.id === itemToRemove.id);
    // console.log(itemExists);
    const price = itemToRemove.price;
    if (!itemExists) {
      alert("Item not in cart");
      return;
    } else if (itemExists.quantity > 1) {
      setCart(
        cart.map((i) =>
          i.id === itemToRemove.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    } else {
      setCart(cart.filter((i) => i.id !== itemToRemove.id));
    }
    console.log(cart);
    setTotal(total - price);
    setItem(item - 1);
  };
  const resetCart = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };
  const toggleCart = () => {
    setCartToggle(!cartToggle);
  };
  return (
    <itemContext.Provider
      value={{
        item,
        total,
        cart,
        handleAdd,
        handleRemove,
        resetCart,
        toggleCart,
      }}
    >
      {cartToggle && <CartModal toggle={toggleCart} cartList={cart} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
