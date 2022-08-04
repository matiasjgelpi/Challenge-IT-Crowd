import {
  Paper,
  Typography,

} from "@mui/material";
import ProductForm from "./ProductForm";
// import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import BrandForm from "./BrandForm";

export default function AdminPage() {
  //   let products = useSelector((state) => state.products.products);
  //   const dispatch = useDispatch();


  //   useEffect(() => {
  //     dispatch(getAllProducts());
  //   }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        minHeight: "85vh",
        backgroundColor: "lightblue",
        tranparent: true,
        margin: "1rem",
        padding: "0 10% 0 10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* <Typography
        variant="h4"
        textAlign="start"
        width="90vw"
        margin="1rem 0 2rem 0"
      >
        Products:
      </Typography> */}

      <ProductForm />
      <BrandForm />
    </Paper>
  );
}
