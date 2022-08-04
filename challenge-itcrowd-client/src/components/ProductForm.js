import {
  Button,
  Box,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { validateProduct } from "../utils/validators";

export default function ProductForm() {
  //   let products = useSelector((state) => state.products.products);
  //   const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    image_url: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log("submit");
  };

  console.log(inputs);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors(validateProduct(inputs));
  };

  useEffect(() => {
    setErrors(validateProduct(inputs));
  }, [setErrors, inputs]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit()}
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
        error={errors.name}
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
        onClick={(e) => handleSubmit(e)}
      >
        Add Product
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ width: "15%" }}
        onClick={(e) => handleSubmit(e)}
      >
        Edit Product
      </Button>
    </Box>
  );
}
