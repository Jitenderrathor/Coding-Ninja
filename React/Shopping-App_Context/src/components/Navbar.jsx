import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const { total, item, resetCart, toggleCart } = useValue();
  // console.log(value);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles.buttonsWrapper} onClick={toggleCart}>
        Cart
      </button>
      <button className={styles.buttonsWrapper} onClick={resetCart}>
        Reset
      </button>
    </div>
  );
}

export default Navbar;
