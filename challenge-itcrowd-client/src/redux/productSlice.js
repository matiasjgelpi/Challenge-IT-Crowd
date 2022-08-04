import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await axios("http://localhost:4000/products");
    return response.data;
  }
);

export const getProductDetail = createAsyncThunk(
  "products/getAllProductDetail",
  async (id) => {
    const response = await axios(`http://localhost:4000/product/${id}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetail: {},
    productsStatus: "null",
    productDetailStatus: "null",
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.productsStatus = "loading";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = [...action.payload];
      state.productsStatus = "success";
    },
    [getAllProducts.rejected]: (state, action) => {
      state.productsStatus = "failed";
    },

    [getProductDetail.pending]: (state, action) => {
      state.productDetailStatus = "loading";
    },
    [getProductDetail.fulfilled]: (state, action) => {
      state.productDetail = { ...action.payload };
      state.productDetailStatus = "success";
    },
    [getProductDetail.rejected]: (state, action) => {
      state.productDetailStatus = "failed";
    },
  },
});

export default productsSlice.reducer;
