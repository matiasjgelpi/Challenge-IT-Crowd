import { Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

export default function EditBrandDetail() {
  const location = useLocation();
  const { id } = useParams();

  console.log(location);

  return (
    <Box
    component="form"

    sx={{
      maxWidth: "75vw",
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
    }}
    >
      <h1>Edit Brand Detail</h1>
      <h2>{id}</h2>
    </Box>
  );
}
