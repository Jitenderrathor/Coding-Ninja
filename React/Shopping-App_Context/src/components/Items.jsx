import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  const itemd = [
    { name: "T-Shirts", price: 199 },
    { name: "Pants", price: 99 },
    { name: "Shoes", price: 149 },
    { name: "Watch", price: 249 },
    { name: "Hat", price: 299 },
  ];
  return (
    <div className={styles.wrapper}>
      {itemd.map((item, index) => (
        <ItemCard key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default Items;
