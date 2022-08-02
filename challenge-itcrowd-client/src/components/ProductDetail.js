import { Paper, Typography, Box } from "@mui/material";
import { borderRadius } from "@mui/system";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "lightblue",
        tranparent: true,
        height: "85vh",
        margin: "1rem",
        padding: "0 10% 0 10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "start",
        gap: "1rem",
      }}
    >
      <Typography variant="h3" textAlign="center" width="100%">
        Product Name
      </Typography>
      <Box
        sx={{
          width: "45%",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
          }}
          width="100%"
          src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-145679137-scaled-e1619025176434.jpg?resize=2048,1365"
          alt="kitty"
        ></img>
      </Box>
      <Box
        sx={{
          width: "45%",
          height: "45%",
          padding: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "start",
        }}
      >
        <Typography variant="h6" textAlign="start" width="100%">
          Price:<b>$$$$$</b>
        </Typography>

        <Typography variant="body1" textAlign="start" width="100%">
          {" "}
          <b>Description:</b> lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Typography>
      </Box>
    </Paper>
  );
}
