import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../itemContext";

function ItemCard({ name, price }) {
  const value = useContext(itemContext);
  const handleAdd = () => {
    value.setTotal(value.total + price);
    value.setItem(value.item + 1);
  };

  const handleRemove = () => {
    if (value.item <= 0) {
      alert("No items to remove");
      return;
    }
    if (value.total - price < 0) {
      alert("Total cannot be negative");
      return;
    }
    value.setTotal(value.total - price);
    value.setItem(value.item - 1);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
