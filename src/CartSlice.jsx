import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',

    initialState: {
        cartItems: [],
    },

    reducers: {
        // Add a plant to the cart
        addItem: (state, action) => {
            const item = state.cartItems.find(
                item => item.name === action.payload.name
            );

            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        // Remove a plant completely from the cart
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                item => item.name !== action.payload
            );
        },

        // Update the quantity of a plant
        updateQuantity: (state, action) => {
            const { name, amount } = action.payload;

            const item = state.cartItems.find(
                item => item.name === name
            );

            if (item) {
                item.quantity = amount;
            }
        },
    },
});

// Export action creators
export const {
    addItem,
    removeItem,
    updateQuantity,
} = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;