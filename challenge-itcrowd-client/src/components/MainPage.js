import { Paper } from "@mui/material"
import ProductCard from "./ProductCard"
import {getAllProducts} from "../redux/productSlice"
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"

export default function MainPage() {

    let products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    console.log(products.length)
    useEffect(() => {
        dispatch(getAllProducts())
    },[])

  return (
    <Paper elevation={3} sx={{
        // height: "85vh",
        margin: "1rem",
        padding: "1rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px"
    }}>
        <h1>{products.lenght}</h1>
        {products[0]?.name ===  'bulbasaur' ? products?.map(product => <ProductCard name={product?.name} />) : <h1>No products</h1>}
    </Paper>
  )
}
