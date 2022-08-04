import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBrands = createAsyncThunk(
  "brands/getAllbrands",
  async () => {
    const response = await axios("http://localhost:4000/brands");
    return response.data;
  }
);

const brandSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    brandsStatus: "null",
  
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

    
  },
});

export default brandSlice.reducer;
