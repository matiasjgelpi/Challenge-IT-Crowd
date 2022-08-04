import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBrands = createAsyncThunk(
  "brands/getAllbrands",
  async () => {
    const response = await axios("http://localhost:4000/brands");
    return response.data;
  }
);

export const getBrandDetail = createAsyncThunk(
  "brands/getBrandDetail",
  async (id) => {
    const response = await axios(`http://localhost:4000/brand/${id}`);
    return response.data;
  }
);

export const addNewBrand = createAsyncThunk(
  "brand/addNewBrand",
  async (newBrand) => {
    const response = await axios.post(`http://localhost:4000/brand/`, newBrand);
    return response.data;
  }
);

export const editBrand = createAsyncThunk(
  "brand/editBrand",
  async (editedBrand, id) => {
    const response = await axios.put(
      `http://localhost:4000/brand/${id}`,
      editedBrand
    );
    return response.data;
  }
);

export const deleteBrand = createAsyncThunk("brand/deleteBrand", async (id) => {
  const response = await axios.delete(`http://localhost:4000/brand/${id}`);
  return response.data;
});

const brandSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    brandDetail: {},
    brandsStatus: "null",
    brandDetailStatus: "null",
    brandAddStatus: "null",
    editBrandStatus: "null",
    deleteBrandStatus: "null",
  },
  extraReducers: {
    [getAllBrands.pending]: (state, action) => {
      state.brandsStatus = "loading";
    },
    [getAllBrands.fulfilled]: (state, action) => {
      state.brands = [...action.payload];
      state.brandsStatus = "success";
    },
    [getAllBrands.rejected]: (state, action) => {
      state.brandsStatus = "failed";
    },
    [getBrandDetail.pending]: (state, action) => {
      state.brandDetailStatus = "loading";
    },
    [getBrandDetail.fulfilled]: (state, action) => {
      state.brandDetail = { ...action.payload };
      state.brandDetailStatus = "success";
    },
    [getBrandDetail.rejected]: (state, action) => {
      state.brandDetailStatus = "failed";
    },
    [addNewBrand.pending]: (state) => {
      state.brandAddStatus = "loading";
    },
    [addNewBrand.fulfilled]: (state) => {
      state.brandAddStatus = "success";
    },
    [addNewBrand.rejected]: (state) => {
      state.brandAddStatus = "failed";
    },
    [editBrand.pending]: (state) => {
      state.editBrandStatus = "loading";
    },
    [editBrand.fulfilled]: (state) => {
      state.editBrandStatus = "success";
    },
    [editBrand.rejected]: (state) => {
      state.editBrandStatus = "failed";
    },
    [deleteBrand.pending]: (state) => {
      state.deleteBrandStatus = "loading";
    },
    [deleteBrand.fulfilled]: (state) => {
      state.deleteBrandStatus = "success";
    },
    [deleteBrand.rejected]: (state) => {
      state.deleteBrandStatus = "failed";
    },
  },
});

export default brandSlice.reducer;
