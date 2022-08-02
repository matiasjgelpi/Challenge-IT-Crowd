import {AppBar, Toolbar} from "@mui/material"

export default function NavBar() {
  return (
    <AppBar sx={{
    backgroundColor:"pink",
    padding: "5px"
    }} color="secondary" 
    position="static">
        {/* <Toolbar>
            <h1>Itcrowd</h1>
        </Toolbar> */}
        <h1>Itcrowd</h1>

    </AppBar>
  )
}
