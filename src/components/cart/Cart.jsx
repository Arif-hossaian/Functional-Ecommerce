import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import React from "react";
import Cartitem from "./cartItem/Cartitem.jsx";

const Cart = ({ cart, handleUpdateQty, handleRemoveCart, handleEmptyCart }) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no Items in your Shopping cart.
      <Link to="/" className={classes.link}>
        For purchase Add somthing
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Cartitem
              item={item}
              onUpdateCartQty={handleUpdateQty}
              onRemoveFromCart={handleRemoveCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            variant="contained"
            type="button"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            variant="contained"
            type="button"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
