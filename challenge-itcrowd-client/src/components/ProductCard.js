import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate} from "react-router-dom";

export default function ProductCard({product}) {

    const navigator = useNavigate();

    const handleClick = () => {
        navigator(`/detail/${product?.id}`);
        
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={
          product?.image_url?.length 
            ? "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-145679137-scaled-e1619025176434.jpg?resize=2048,1365"
            : product.image_url
        }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>See More</Button>
      </CardActions>
    </Card>
  );
}
