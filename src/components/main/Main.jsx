import { Box, Container, Dialog, Stack, Typography} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";
import axios from "axios";


const Main = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error , setError] = useState(null)


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      console.log(response.data);
      setLoading(false)
    })
      .catch((error) => {
        setError(error.mثssage)
        setLoading(false)  
    })
  },[])

  if (loading) return (
    <Box
      sx={{
        color: "#6482AD",
        textAlign: "center",
        fontSize: "24px",
        fontWeight:"600"
      }}
    >
      is loading...
    </Box>
  );
  if (error) return <div>error: {error}</div>
    
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Stack
        direction="row"
        sx={{
          display: "flex ",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5">Selected Produts</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              color: "#2B3445",
              backgroundColor: "#6482AD",
            },
          }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            all products
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            Men Category
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              sx={{
                maxWidth: 345,
                marginTop: "50px !important",
                margin: "auto",
                marginBottom: "100px",
                "&:hover": {
                  rotate: "1deg",
                  transform: "scale(1.01)",
                  transition: ".5s",
                  cursor: "pointer",
                },
              }}
            >
              <CardMedia
                sx={{ height: 250 }}
                image={data.image}
                title="green iguana"
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary",marginBottom :"auto"}}>
                    {data.description}
                  </Typography>
                </CardContent>
                <Box sx={{ justifyContent:"around",alignItems:"end",display:"flex"}}>
                  <Button
                    size="small"
                    sx={{ transform: "capitalize", padding: "10px" }}
                    onClick={handleClickOpen}
                  >
                    <AddShoppingCartOutlinedIcon sx={{ marginRight: "10px" }} />
                    add to cart
                  </Button>
                  <Button size="small">
                    <Rating
                      name="simple-controlled"
                      value={data.rating.rate}
                    />
                  </Button>
                </Box>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="fall-in"
      > 
          <Close
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              "&:hover": {
                cursor: "pointer",
                transform: "rotate(360deg)",
                transition: "1s",
              },
            }}
            onClick={handleClose}
          />
          <ProductDetails />
      </Dialog>
    </Container>
  );
};

export default Main;
