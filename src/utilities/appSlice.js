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

        removerCartItem : ((state, payload)=>{
            state.cartItems.pop()
        })
    }
});

export const {addCartItem, removerCartItem} = appSlice.actions
export default appSlice.reducer;