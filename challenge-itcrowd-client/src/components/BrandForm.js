import { Button, Box, TextField } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { validateBrand } from "../utils/validators";

export default function BrandForm() {
  //   let products = useSelector((state) => state.products.products);
  //   const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    logo_url: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

   const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors(validateBrand(inputs));
  };

  useEffect(() => {
    setErrors(validateBrand(inputs));
  }, [setErrors, inputs]);

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
        error={errors?.name !== undefined}
        helperText={errors?.name && errors?.name}
        variant="outlined"
        label="Name"
        margin="normal"
        value={inputs.name}
        onChange={handleChange}
      />

      <TextField
        name="logo_url"
        fullWidth
        error={errors?.logo_url !== undefined}
        helperText={errors?.logo_url && errors?.logo_url}
        variant="outlined"
        label="Logo URL"
        margin="normal"
        value={inputs.logo_url}
        onChange={handleChange}
      />

      <Button
        variant="contained"
        size="small"
        sx={{ width: "20%" }}
        // onClick={(e) => handleSubmit(e)}
        disabled={errors.isValid}
      >
        Add Brand
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ width: "20%" }}
        // onClick={(e) => handleSubmit(e)}
        disabled={errors.isValid}
      >
        Edit Brand
      </Button>
    </Box>
  );
}
