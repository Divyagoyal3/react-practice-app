import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './CartSlice'; // Import the cart slice reducer
const store = configureStore({
    reducer: {
        // Add your reducers here
        cart: cartSlice, // Use the cart slice reducer
    }
});

export default store; // Export the store to be used in your app