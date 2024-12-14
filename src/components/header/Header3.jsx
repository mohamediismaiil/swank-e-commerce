import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DevicesIcon from "@mui/icons-material/Devices";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import Links from "./Links";

const Header3 = () => {
  // closed menu react hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // ============ accordion ============

  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            bgcolor: "#6482AD",
            borderRadius: "5px",
            width: "200px",
          }}
        >
          <WindowIcon />
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ transform: "capitalize", color: theme.palette.text.primary }}
          >
            <Typography>categories</Typography>
            <Box flexGrow={1}></Box>
            <ChevronRightIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ mt: "40px", ml: "-45px" }}
          >
            <MenuList>
              <MenuItem onClick={handleClose} sx={{ width: "200px" }}>
                <ListItemIcon>
                  <DirectionsBikeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Bikes</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose} sx={{ width: "200px" }}>
                <ListItemIcon>
                  <DevicesIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Electronics</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose} sx={{ width: "200px" }}>
                <ListItemIcon>
                  <MenuBookIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Books</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose} sx={{ width: "200px" }}>
                <ListItemIcon>
                  <SportsEsportsOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Games</ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {useMediaQuery("(min-width:1000px)") && (
          <Stack gap={5} direction={"row"}>
            <Box sx={{cursor:"pointer"}} href="/home">Home</Box>
            <Links title={"Pages"} />
            <Links title={"Services"} />
            <Links title={"User Account"} />
            <Links title={"vendor Account"} />
          </Stack>
        )}

        {useMediaQuery("(max-width:1000px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-elevation16": {
              height: "100%",
              py: "120px",
            },
            bgColor: "rgba(255, 255, 255, 0.12)",
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: "20px",
              right: "20px",
              "&:hover": {
                rotate: "180deg",
                transition: ".5s",
                color: "black",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
              "&.MuiPaper-root": {
                width: "30%",
                my: 0,
                mx: "auto",
              },
              bgColor: "initial",
            }}
            elevation={25}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Home</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="link1" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="link2" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="link3" />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            elevation={25}
            sx={{
              "&.MuiPaper-root": {
                bgColor: "initial",
                width: "30%",
                my: 0,
                mx: "auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              elevation={50}
            >
              <Typography>Mega menu</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="menu 1" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="menu 2" />
                  </ListItemButton>
                </ListItem>
              </List>{" "}
            </AccordionDetails>
          </Accordion>

          <Accordion
            elevation={25}
            sx={{
              "&.MuiPaper-root": {
                bgColor: "initial",
                width: "30%",
                my: 0,
                mx: "auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              elevation={50}
            >
              <Typography>Full screen menu</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="screen one" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="screen two" />
                  </ListItemButton>
                </ListItem>
              </List>{" "}
            </AccordionDetails>
          </Accordion>

          <Accordion
            elevation={25}
            sx={{
              "&.MuiPaper-root": {
                bgColor: "initial",
                width: "30%",
                my: 0,
                mx: "auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              elevation={50}
            >
              <Typography>Pages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="page 1 " />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="page 2" />
                  </ListItemButton>
                </ListItem>
              </List>{" "}
            </AccordionDetails>
          </Accordion>

          <Accordion
            elevation={25}
            sx={{
              "&.MuiPaper-root": {
                bgColor: "initial",
                width: "30%",
                my: 0,
                mx: "auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              elevation={50}
            >
              <Typography>User account</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="settings" />
                  </ListItemButton>
                </ListItem>
              </List>{" "}
            </AccordionDetails>
          </Accordion>

          <Accordion
            elevation={25}
            sx={{
              "&.MuiPaper-root": {
                bgColor: "initial",
                width: "30%",
                my: 0,
                mx: "auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              elevation={50}
            >
              <Typography>Vendor account</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="settings" />
                  </ListItemButton>
                </ListItem>
              </List>{" "}
            </AccordionDetails>
          </Accordion>
        </Drawer>
      </Box>
    </Container>
  );
};

export default Header3;
