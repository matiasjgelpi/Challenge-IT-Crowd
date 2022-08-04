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

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (newProduct) => {
    const response = await axios.post(
      `http://localhost:4000/product/`,
      newProduct
    );
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (editedProduct, id) => {
    const response = await axios.put(
      `http://localhost:4000/product/${id}`,
      editedProduct
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.delete(`http://localhost:4000/product/${id}`);
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
    productAddStatus: "null",
    editProductStatus: "null",
    deleteProductStatus: "null",
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

    [addNewProduct.pending]: (state) => {
      state.productAddStatus = "loading";
    },
    [addNewProduct.fulfilled]: (state) => {
      state.productAddStatus = "success";
    },
    [addNewProduct.rejected]: (state) => {
      state.productAddStatus = "failed";
    },
    [editProduct.pending]: (state) => {
      state.editProductStatus = "loading";
    },
    [editProduct.fulfilled]: (state) => {
      state.editProductStatus = "success";
    },
    [editProduct.rejected]: (state) => {
      state.editProductStatus = "failed";
    },

    [deleteProduct.pending]: (state) => {
      state.deleteProductStatus = "loading";
    },
    [deleteProduct.fulfilled]: (state) => {
      state.deleteProductStatus = "success";
    },
    [deleteProduct.rejected]: (state) => {
      state.deleteProductStatus = "failed";
    },
  },
});

export default productsSlice.reducer;
