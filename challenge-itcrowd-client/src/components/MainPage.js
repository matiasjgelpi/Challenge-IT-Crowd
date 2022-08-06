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
  }, [dispatch]);

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
      <Typography
        variant="h4"
        textAlign="start"
        width="90vw"
        margin="1rem 0 2rem 0"
      >
        Products:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        {products.length > 0 ? (
          products?.map((product) => (
            <ProductCard product={product}  />
          ))
        ) : (
          <h1>No products</h1>
        )}
      </Box>
    </Paper>
  );
}
