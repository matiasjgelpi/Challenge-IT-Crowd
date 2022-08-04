import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  const response = await axios("http://localhost:4000/products");
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "null",
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = [...action.payload];
      state.status = "success";
    },
    [getAllProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
