import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import inquiryReducer from "./inquirySlice";
import dashboardReducer from "./dashboardSlice";
import reviewReducer from "./reviewSlice";   

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    inquiry: inquiryReducer,
    dashboard: dashboardReducer,
    reviews: reviewReducer,   
  },
});

export default store;

