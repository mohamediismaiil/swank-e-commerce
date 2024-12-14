import { Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "",
        marginTop: "100px",
        padding: "30px",
        bgcolor: theme.palette.footer.main,
      }}
    >
      All right deserved by @Swika
    </Typography>
  );
};

export default Footer;
