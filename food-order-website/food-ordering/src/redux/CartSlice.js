import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({  
    name: 'cart',
    initialState:  [],
    reducers: {
        addToCart: (state, action) => {
        let existItem =  state.find(item => item.id === action.payload.id) ;
        if(existItem){
             return state.map(item => item.id === action.payload.id ? {...item, qty:item.qty + 1}: item)
        }else{
            state.push(action.payload);
        }

    },
        removeFromCart: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        IncrementQty: (state, action) => {
          return state.map(item => item.id === action.payload ? {...item, qty:item.qty + 1}: item)
        },
        DecrementQty: (state, action) => {
            return state.map(item => item.id === action.payload ? {...item, qty:item.qty - 1}: item)
        },
        // clearCart: (state) => {
        //     return [];
        // }
    }
})

export const {addToCart,removeFromCart,IncrementQty,DecrementQty} = cartSlice.actions;
export default cartSlice.reducer; // Export the reducer to be used in the store