import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import ProductSlice from "./slice/ProductSlice";
import ProductsSlice from "./slice/ProductsSlice";
import BillSlice from "./slice/BillSlice";

export const Store = configureStore({
  reducer: {
    products: ProductsSlice,
    product: ProductSlice,
    cart: CartSlice,
    bill: BillSlice,
  },
});
