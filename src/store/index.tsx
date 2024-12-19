import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header-slice";
import sidebarReducer from "./sideBar-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    sidebar: sidebarReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
