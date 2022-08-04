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
import { useSelector, useDispatch } from "react-redux";
import { getAllBrands } from "../redux/brandSlice";

export default function EditDeletePage() {
  let brands = useSelector((state) => state.brands.brands);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    brand: "",
    product: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  const handleChange = (e) => {};

  return (
    <Box>
      <FormControl error={errors?.brand !== undefined} fullWidth>
        <InputLabel variant="outlined" htmlFor="description">
          Brands
        </InputLabel>
        <Select
          label="Brands"
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
    </Box>
  );
}
