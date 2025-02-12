import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};
export const CartSlice = createSlice({
  name: "finalcart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartList = [...state.cartList, action.payload];
    },
    removeItem: (state, action) => {
      debugger;
      const filteredCart = state.cartList.filter((eachItem) => {
        return eachItem.id !== action.payload;
      });
      state.cartList = filteredCart;
    },
    addCartItem: (state, action) => {
      // console.log(action.payload);

      // state.cartItems = [...state.cartList, action.payload];

      const selectedItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );

      // If the item is found, increment its quantity
      if (selectedItem) {
        const addedNewCartItem = state.cartList.map((item) => {
          if (item.id === selectedItem.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            }; // Increment the quantity
          }
          return [...state.cartList, action.payload]; // Return the other items unchanged
        });

        state.cartList = addedNewCartItem; // Update the state
      } else {
        state.cartList = [...state.cartList, action.payload];
      }
    },
    deleteCartItem: (state, action) => {
      const filteredCartItems = state.cartList.filter(
        (items) => items.id !== action.payload
      );
      state.cartList = filteredCartItems;
    },
    removeCartList: (state, action) => {
      state.cartList = [];
    },
    incrementCartItemQuantity: (state, action) => {
      const selectedItem = state.cartList.find(
        (item) => item.id === action.payload
      );

      // If the item is found, increment its quantity
      if (selectedItem) {
        const incrementedCartItem = state.cartList.map((item) => {
          if (item.id === selectedItem.id) {
            return { ...item, quantity: item.quantity + 1 }; // Increment the quantity
          }
          return item; // Return the other items unchanged
        });

        state.cartList = incrementedCartItem; // Update the state
      }
    },
    decrementCartItemQuantity: (state, action) => {
      const selectedItem = state.cartList.find(
        (item) => item.id === action.payload
      );

      if (selectedItem && selectedItem.quantity > 0) {
        state.cartList = state.cartList.map((item) =>
          item.id === selectedItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else if (selectedItem && selectedItem.quantity === 0) {
        // Instead of removing the item, just leave it with quantity 0
        state.cartList = state.cartList.map((item) =>
          item.id === selectedItem.id
            ? { ...item, quantity: 0 } // Ensure quantity stays 0
            : item
        );
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  addCartItem,
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  deleteCartItem,
  removeCartList,
} = CartSlice.actions;

export default CartSlice;
