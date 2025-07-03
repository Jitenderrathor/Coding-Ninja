import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";

function ItemCard({ item }) {
  const { name, price } = item;
  const { handleAdd, handleRemove } = useValue();
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(item)}>
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
