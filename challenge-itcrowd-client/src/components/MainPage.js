import { Paper } from "@mui/material"
import ProductCard from "./ProductCard"

export default function MainPage() {
  return (
    <Paper elevation={3} sx={{
        height: "85vh",
        margin: "1rem"
    }}>
        <ProductCard></ProductCard>
    </Paper>
  )
}
