import { Box } from "@mui/material";

export default function NavBar() {
  return (
    <Box
      style={{
        backgroundColor: "pink",
        display: "flex",
        justifyContent: "end",
        padding: "5px"
      }}
      color="secondary"
      position="static"
    >
      <h1>Itcrowd</h1>
    </Box>
  );
}
