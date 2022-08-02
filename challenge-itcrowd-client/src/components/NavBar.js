import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "pink",
        padding: "5px",

      }}
      color="secondary"
      position="static"
    >
      {/* <Toolbar>
            <h1>Itcrowd</h1>
        </Toolbar> */}
      <Link style={{
        textDecoration: "none",
        color: "white",
      }} to="/">
        <h1>Itcrowd cellphones</h1>
      </Link>
    </AppBar>
  );
}
