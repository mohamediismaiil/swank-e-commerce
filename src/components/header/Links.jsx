import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Links = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          ":hover .show-when-hover": { display: "block" },
        }}
      >
        <Typography>{props.title}</Typography>
        <ExpandMoreIcon style={{ marginLeft: "5px" }} />

        <Paper
          className="show-when-hover"
          sx={{
            position: "absolute",
            top: "20px",
            left: "-14px",
            mt: "7px",
            width: "150px",
            borderRadius: "5px",
            display: "none",
            zIndex:"1000"
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: "0" }}>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  ":hover .show_product": { display: "block" },
                }}
              >
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  sx={{ py: "0" }}
                >
                  <ListItemText primary="products" />
                </ListItemButton>
                <Box flexGrow={1}></Box>
                <KeyboardArrowRightIcon />
                <Paper
                  className="show_product "
                  sx={{
                    position: "absolute",
                    left: "150px",
                    top: "50%",
                    width: "150px",
                    display: "none",
                  }}
                >
                  <nav aria-label="secondary mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ py: 0 }}>
                          <ListItemText primary="Add product" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ py: 0 }}>
                          <ListItemText primary="Edit product" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Paper>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  sx={{ py: "0" }}
                >
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  sx={{ py: "0" }}
                >
                  <ListItemText primary="Profiles" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
