import { useState } from 'react'
import { Container, IconButton, Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import Menu from "@mui/material/Menu";  
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../index.css"


const Search = styled("div")(({ theme }) => ({
  flexGrow :0.5,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "200",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


const options = [
  "All categories",
  "Cars",
  "Clothes",
  "Electronics",
];



const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: 2,
      }}
    >
      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <LocalGroceryStoreOutlinedIcon />
        <Typography>
          Swank
          <span style={{ fontWeight: "bolder", paddingLeft: "5px" }}>.</span>
        </Typography>
      </Stack>

      <Search
        sx={{
          display: "flex",
          border: "1px solid gray",
          borderRadius: 10,
          justifyContent: "space-between",
          width:{xs:"300px" , sm:"500px" }
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div style={{ width: {xs:"50%" ,sm:"25%"}}}>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: "#6482AD",
              display: "flex",
              alignItems: "center",
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              m: "0",
            }}
            onClick={handleClickListItem}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
            >
              <ListItemText sx={{ m: "auto"  }} secondary={options[selectedIndex]} />
            </ListItemButton>
            <ExpandMoreIcon sx={{ marginRight: "15px" }} />
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <IconButton>
          <Badge badgeContent={4} color="primary">
            <LocalGroceryStoreOutlinedIcon color="action" />
          </Badge>
        </IconButton>

        <IconButton sx={{ ml: 2, textAlign: "center" }}>
          <Person2OutlinedIcon />
        </IconButton>

      
      </Stack>
    </Container>
  );
  };
export default Header2;