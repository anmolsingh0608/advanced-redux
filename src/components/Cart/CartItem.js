import Button from "./Button";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;
  const unitPrice = price / quantity;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${unitPrice.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <Button id={id} btnText={"-"} type="remove" />
          <Button
            btnText={"+"}
            title={title}
            id={id}
            price={price}
            quantity={1}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
