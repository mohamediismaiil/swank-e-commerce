import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Typography, Stack, Box, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";

const options = ["EN", "AR"];

const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
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
      <Box sx={{ backgroundColor: "#6482AD" }}>
        <Container>
          <Stack direction="row" alignItems="center">
            <Typography
              sx={{
                backgroundColor: "#FFB4C2",
                borderRadius: "4px",
                fontSize: "14px",
                px: "5px",
                mx: "10px",
                fontWeight: "20px",
                color: "black",
              }}
            >
              HOT
            </Typography>

            <Typography sx={{ ml: "20px" }}>Free Express Shipping</Typography>

            <Box flexGrow={1}></Box>

            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
            )}

            <List component="nav" aria-label="Device settings" sx={{ p: "0" }}>
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{textAlign:"center" }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore />
              </ListItemButton>
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
                  sx={{ fontSize: "14px", px: "15px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            <FacebookIcon sx={{ mx: "10px" }} />
            <InstagramIcon sx={{ mx: "10px" }} />
            <XIcon sx={{ mx: "10px" }} />
          </Stack>
        </Container>
      </Box>
    );
};

export default Header1;
