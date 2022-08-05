import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBrandDetail } from "../redux/brandSlice";
import BrandForm from "./BrandForm";

export default function EditBrandDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const brand = useSelector((state) => state.brands.brandDetail);

  useEffect(() => {
    dispatch(getBrandDetail(id));
  });

  return (
    <Box
      sx={{
        maxWidth: "80vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "6rem",
        }}
      >
        <Typography variant="h4">Preview</Typography>
        <Typography variant="h6">Name: {brand.name}</Typography>
        <Typography
          variant="h6"
          component="span"
          sx={{
            width: "25%",
          }}
        >
          {" "}
          Logo:{" "}
        </Typography>

        <img
          style={{
            borderRadius: "10px",
            width: "25%",
            display: "inline",
          }}
          src={
            brand?.logo_url?.length < 10
              ? "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-145679137-scaled-e1619025176434.jpg?resize=2048,1365"
              : brand.logo_url
          }
          alt="kitty"
        ></img>
      </Box>
      <Box
        sx={{
          width: "45%",
        }}
      >
        <BrandForm id={id} />
      </Box>
    </Box>
  );
}
