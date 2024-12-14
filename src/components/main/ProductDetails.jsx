import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const ProductDetails = () => {
  return (
    <Stack
      sx={{ width: "500px", height: "300px" }}
      direction="row"
      
    >
      <Box>
        <img
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          width="200px"
          height="98%"
          style={{ padding: "10px", borderRadius: "10px" }}
        />
      </Box>
      <Box
        sx={{
          margin: "15px",
        }}
      >
        <Typography variant="h5">women's fashion</Typography>
        <Typography sx={{ color: "blue", margin: "10px auto" }}>
          $20.99
        </Typography>
        <Typography>
          lorem fasd fasfsafs sfasfs fasfsdaf sfcdvdfgf hgfdlorem fasd fasfsafs
          sfasfs fasfsdaf sfcdvdfgf hgfd
        </Typography>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            width="70px"
            style={{ marginRight: "10px" }}
          />
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            width="70px"
            style={{ marginRight: "10px" }}
          />
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            width="70px"
            style={{ marginRight: "10px" }}
          />
        </Box>

        <Button sx={{ bgcolor: "#272525", margin: "10px" }}>
          <AddShoppingCartIcon />
          Buy Now
        </Button>
      </Box>
    </Stack>
  );
}

export default ProductDetails;