import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "pink",
        padding: "1rem",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      color="secondary"
      position="static"
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
        }}
        to="/"
      >
        <h1>Itcrowd cellphones</h1>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
        }}
        to="admin/Edit/Delete"
      >
        <h1>Admin</h1>
      </Link>
    </AppBar>
  );
}
