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
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addNewProduct } from "../redux/productSlice";
import { getAllBrands } from "../redux/brandSlice";
import { validateProduct } from "../utils/validators";

export default function ProductForm() {
  let brands = useSelector((state) => state.brands.brands);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    image_url: "",
    price: "",
    brand: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

   const handleSubmit = (e) => {
    e.preventDefault();
    const validInputs = {
        ...inputs,
        price: parseFloat(inputs.price),
    }
    dispatch(addNewProduct(validInputs));
    console.log("submit");
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors(validateProduct(inputs));
  };

  useEffect(() => {
    setErrors(validateProduct(inputs));
  }, [setErrors, inputs]);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "75vw",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <TextField
        name="name"
        fullWidth
        error={errors.name !== undefined}
        helperText={errors?.name && errors?.name}
        variant="outlined"
        label="Name"
        margin="normal"
        value={inputs.name}
        onChange={handleChange}
      />

      <TextField
        name="image_url"
        error={errors?.image_url !== undefined}
        helperText={errors?.image_url && errors?.image_url}
        variant="outlined"
        label="Image URL"
        margin="normal"
        value={inputs.image_url}
        sx={{ width: "85%" }}
        onChange={handleChange}
      />

      <TextField
        name="price"
        error={errors?.price !== undefined}
        helperText={errors?.price && errors?.price}
        variant="outlined"
        label="Price"
        type="number"
        margin="normal"
        value={inputs.price}
        sx={{ width: "15%" }}
        onChange={handleChange}
      />

      <FormControl error={errors?.brand !== undefined} fullWidth>
        <InputLabel variant="outlined" htmlFor="description">
          Brand
        </InputLabel>
        <Select
        label="Brand"
        name="brand"
        value={inputs.brand}
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
          {errors?.brand && errors?.brand}
        </FormHelperText>
      </FormControl>

      <FormControl error={errors?.description !== undefined} fullWidth>
        <InputLabel variant="outlined" htmlFor="description">
          Description
        </InputLabel>
        <OutlinedInput
          label="Description"
          name="description"
          multiline
          minRows={10}
          onChange={handleChange}
          value={inputs.description}
        ></OutlinedInput>
        <FormHelperText variant="outlined">
          {errors?.description && errors?.description}
        </FormHelperText>
      </FormControl>

      <Button
        variant="contained"
        size="small"
        sx={{ width: "15%" }}
        onClick={handleSubmit}
        disabled={errors.isValid}
        type="submit"
      >
        Add Product
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ width: "15%" }}
        // onClick={handleSubmit}
        disabled={errors.isValid}
      >
        Edit Product
      </Button>
    </Box>
  );
}
