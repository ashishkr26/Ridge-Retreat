import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState :{
        cartItems :[]
    },
    reducers:{
        addCartItem : ((state,action)=>{
            state.cartItems.push(action.payload)
        }),

        removeCartItem : ((state, payload)=>{
            state.cartItems.pop()
        })
    }
});

export const {addCartItem, removeCartItem} = appSlice.actions
export default appSlice.reducer;