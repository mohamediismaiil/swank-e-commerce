import { Box, Container, Stack, Typography } from "@mui/material"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PaymentIcon from "@mui/icons-material/Payment";





const IconsBox = ({ icon , title, subtitle }) => {
    return (
      <Box sx={{fontSize:"large" ,display:"flex",m :"auto" ,border:".5px solid gray" , borderRadius:"5px" ,p:"35px" }}>
        {icon}
        <Box sx={{ml:"10px"}}>
          <Typography>{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Box>
      </Box>
    );
    }


const BoxIcons = () => {
  return (
    <Container>
      <Stack direction="row" sx={{ my: "30px", flexGrow:1 ,gap:3 ,flexWrap:"wrap"}}>
        <IconsBox
          icon={<ElectricBoltIcon />}
          title={"First Delivery"}
          subtitle={"Start from 50 EGP"}
        />
        <IconsBox
          icon={<AttachMoneyIcon />}
          title={"Money Guarantee "}
          subtitle={"7 Days Back"}
        />
        <IconsBox
          icon={<AccessAlarmIcon />}
          title={"365 Days"}
          subtitle={"For Free Return"}
        />
        <IconsBox
          icon={<PaymentIcon />}
          title={"Payment"}
          subtitle={"Secure system "}
        />
      </Stack>
    </Container>
  );
}

export default BoxIcons;