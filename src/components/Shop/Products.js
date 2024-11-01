import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";

const Products = (props) => {
  const dispatch = useDispatch();

  const addToCart = (id, title, price) => {
    const payload = { id, title, price, quantity: 1 };
    dispatch(cartActions.addItem(payload));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          addToCart={addToCart}
        />
      </ul>
    </section>
  );
};

export default Products;
