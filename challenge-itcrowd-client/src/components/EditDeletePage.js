import {
  Button,
  Box,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrands, deleteBrand } from "../redux/brandSlice";
import { getAllProducts, deleteProduct } from "../redux/productSlice";
import { maxHeight } from "@mui/system";

export default function EditDeletePage() {
  let brands = useSelector((state) => state.brands.brands);
  let products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    brand: "",
    product: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // setErrors(validateProduct(inputs));
  };

  const handleDelete = (e) => {
    if (e.target.name === "brand") {
      console.log("delete brand");
      dispatch(deleteBrand(inputs.brand));
    }
    if (e.target.name === "product") {
      dispatch(deleteProduct(inputs.product));
    }
  };

  const handleEdit = (e) => {
    if (e.target.name === "brand") {
      navigate(`EditBrand/${inputs.brand}`);
    }
    if (e.target.name === "product") {
      navigate(`EditProduct/${inputs.product}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <FormControl error={errors?.brand !== undefined} fullWidth>
          <InputLabel variant="outlined" htmlFor="description">
            Brands
          </InputLabel>
          <Select
            label="Brands"
            name="brand"
            value={inputs.brand}
            error={inputs.brand === ""}
            onChange={handleChange}
          >
            {brands?.map((brand) => {
              return (
                <MenuItem key={brand.id} value={brand.id}>
                  {brand.name}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText variant="outlined">
            {inputs.brand === "" && "Select a product to edit or delete"}
          </FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "12%",
            maxHeight: "3rem",
          }}
          name="brand"
          onClick={handleEdit}
          disabled={inputs.brand === ""}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "12%",
            maxHeight: "3rem",
          }}
          name="brand"
          onClick={(e) => handleDelete(e)}
          disabled={inputs.brand === ""}
        >
          Delete
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <FormControl error={errors?.brand !== undefined} fullWidth>
          <InputLabel variant="outlined" htmlFor="description">
            Products
          </InputLabel>
          <Select
            label="Products"
            name="product"
            value={inputs.product}
            error={inputs.product === ""}
            onChange={handleChange}
          >
            {products?.map((product) => {
              return (
                <MenuItem key={product.id} value={product.id}>
                  {product.name}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText variant="outlined">
            {inputs.product === "" && "Select a product to edit or delete"}
          </FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "12%",
            maxHeight: "3rem",
          }}
          name="product"
          onClick={handleEdit}
          disabled={inputs.product === ""}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "12%",
            maxHeight: "3rem",
          }}
          name="product"
          onClick={handleDelete}
          disabled={inputs.product === ""}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
