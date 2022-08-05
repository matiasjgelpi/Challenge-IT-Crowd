import { useEffect, useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { validateBrand } from "../utils/validators";
import { useLocation } from "react-router-dom";
import { addNewBrand } from "../redux/brandSlice";

export default function BrandForm({edit}) {
  
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    logo_url: "",
  });
  const [errors, setErrors] = useState({});

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBrand(inputs));
    console.log("submit");
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors(validateBrand(inputs, edit));
  };

  useEffect(() => {
    setErrors(validateBrand(inputs,edit));
  }, [setErrors, inputs, edit]);

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

      {location.pathname === "/admin/AddBrand" ? (
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "20%",
          }}
          onClick={handleSubmit}
          disabled={errors.isValid}
        >
          Add Brand
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          sx={{ width: "20%" }}
          // onClick={(e) => handleSubmit(e)}
          disabled={errors.isValid}
        >
          Edit Brand
        </Button>
      )}
    </Box>
  );
}
