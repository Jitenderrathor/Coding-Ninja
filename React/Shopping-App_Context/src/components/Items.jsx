import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  const itemd = [
    { id: 1, name: "T-Shirts", price: 199 },
    { id: 2, name: "Pants", price: 99 },
    { id: 3, name: "Shoes", price: 149 },
    { id: 4, name: "Watch", price: 249 },
    { id: 5, name: "Hat", price: 299 },
  ];
  return (
    <div className={styles.wrapper}>
      {itemd.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
}

export default Items;
