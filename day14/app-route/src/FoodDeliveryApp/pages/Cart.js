import React from "react";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  deleteCartItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  removeCartList,
} from "../globalCart/CartSlice";
import CartSummary from "../cartSummary/CartSummary";

const Cart = () => {
  const cart = useSelector((state) => state.finalcart.cartList);
  const dispatch = useDispatch();
  console.log("final cart is", cart);

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrementCartItemQuantity(id));
    } else {
      dispatch(deleteCartItem(id));
    }
  };

  return (
    <div className="cart-list-items">
      {cart.length > 0 ? (
        <div className="cart-remove-header">
          <h4 className="cart-heading">my cart</h4>
          <button
            className="cart-remove-btn"
            onClick={() => dispatch(removeCartList())}
          >
            remove all
          </button>
        </div>
      ) : null}

      {cart.map((eachItem) => {
        const { id, image, name, price, quantity } = eachItem;
        return (
          <div key={id}>
            <div class="cartitem-card-cart m-3">
              <img
                src={image}
                className="card-img-top cart-item-image"
                alt="..."
              />
              <div class=" menuitem-info">
                <h5 class="">{name}</h5>
                <h5 style={{ color: "#52606D" }}>Price {price}</h5>
                <p>quantity: {quantity}</p>
                <button onClick={() => handleDecrement(id, quantity)}>-</button>
                &nbsp;{quantity}&nbsp;
                <button onClick={() => dispatch(incrementCartItemQuantity(id))}>
                  +
                </button>
              </div>
              <div>
                <h4>Rs {price * quantity}/-</h4>
              </div>
              <div>
                <button
                  className="delete-button"
                  onClick={() => dispatch(deleteCartItem(id))}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-5">{cart.length > 0 && <CartSummary />}</div>
      {cart.length === 0 && <h4>Your Cart is Empty</h4>}
    </div>
  );
};

export default Cart;
