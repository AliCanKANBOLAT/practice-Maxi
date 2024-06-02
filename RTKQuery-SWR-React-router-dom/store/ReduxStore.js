import { configureStore } from "@reduxjs/toolkit";
import { catApiSlice } from "./CatApi/catApiSlicer";



export const store = configureStore({
  reducer: {
    [catApiSlice.reducerPath] : catApiSlice.reducer
  }, 
  middleware:(getDefaultMiddleware) =>  {
    return getDefaultMiddleware().concat(catApiSlice.middleware)
  }
})