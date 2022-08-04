import { Paper, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MainPage() {
  let products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  return (
    <Paper
      elevation={3}
      sx={{
        // height: "85vh",
        backgroundColor: "lightblue",
        tranparent: true,
        margin: "1rem",
        padding: "0 10% 0 10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Typography variant="h3" textAlign="start" width="100%">
        Products:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "1rem",
        }}
      >
        {products.length > 0 ? (
          products?.map((product) => <ProductCard name={product?.name} id={product.id} />)
        ) : (
          <h1>No products</h1>
        )}
      </Box>
    </Paper>
  );
}
