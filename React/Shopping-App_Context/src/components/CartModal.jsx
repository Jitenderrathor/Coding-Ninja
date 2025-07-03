import React from "react";
import { useValue } from "../itemContext";
import styles from "../styles/CartModal.module.css";

function CartModal() {
  const { total, item, cart, resetCart, toggleCart, handleAdd, handleRemove } =
    useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={resetCart}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item, index) => (
          <div key={index} className={styles.cartCard}>
            <div>{item.name}</div>
            <div>
              {item.price} X {item.quantity}
            </div>
            {/* <div>&#x20B9; {item.quantity * item.price}</div> */}
            <div>$ {item.quantity * item.price}</div>
            <div className={styles.quantity}>
              <button onClick={() => handleAdd(item)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleRemove(item)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total : {item}</div>
        <div className={styles.totalPrice}>$Price : {total}</div>
      </div>
    </div>
  );
}

export default CartModal;
