import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";

const Button = ({ btnText, id, title, price, quantity, type = "add" }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const payload = { id, title, price, quantity };
    dispatch(cartActions.addItem(payload));
  };

  const removeCart = () => {
    dispatch(cartActions.removeItem({ id }));
  };

  return (
    <button onClick={type === "add" ? addToCart : removeCart}>{btnText}</button>
  );
};

export default Button;
