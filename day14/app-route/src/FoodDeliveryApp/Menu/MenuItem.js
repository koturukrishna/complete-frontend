import React, { useState } from "react";
import {
  addItem,
  removeItem,
  addCartItem,
  removeCartList,
  deleteCartItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from "../globalCart/CartSlice";
import { useDispatch } from "react-redux";

const MenuItem = (props) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const { menuDetails } = props;
  const {
    category,
    description,
    id,
    image,
    isVeg,
    name,
    price,
    rating,
    reviews,
  } = menuDetails;

  const handleDecrementQuantity = (id) => {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  };

  const handelIncrementQuantity = () => {
    setItemQuantity((prev) => prev + 1);
  };

  return (
    <div className="menuitem-card">
      <img src={image} className="card-img-top menu-item-image" alt="..." />
      <div class="card-body menuitem-info">
        <h5 class="card-title rest-name">{name}</h5>
        <h6 class="card-text">category: {category}</h6>
        <h5>Price ₹{price}</h5>
        <h5 className="rating-reviews">
          ⭐{rating} rating {reviews} reviews
        </h5>
        <p className="item-description"> {description}</p>
        {!showAdd && (
          <button onClick={() => setShowAdd(true)} className="add-button">
            Add
          </button>
        )}
        {showAdd && (
          <div>
            <button onClick={() => handleDecrementQuantity()}>-</button>
            &nbsp;{itemQuantity}&nbsp;
            <button onClick={() => setItemQuantity((prev) => prev + 1)}>
              +
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() =>
                dispatch(
                  addCartItem({ ...menuDetails, quantity: itemQuantity })
                )
              }
              className="add-button"
            >
              Add&nbsp;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
