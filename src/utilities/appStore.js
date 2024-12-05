import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./appSlice"

const appStore = configureStore({
    reducer: {
        cart : cartReducer
    }
})
 export default appStore;