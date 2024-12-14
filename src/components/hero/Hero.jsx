import { Box, Container, Typography } from "@mui/material";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


const Hero = () => {
    const swiperData = [
      { text: "men", link: "/images/men.jpg" },
      { text: "women", link: "/images/women.jpg" },
    ];


  return (
    <Container sx={{ zIndex: "-1" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        style={{ "--swiper-pagination-color": "gray" , zIndex:"1" }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperData.map((item) => {
          return (
            <SwiperSlide key={item.link} className="imageSlider">
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: "-1",
                  height: "500px",
                  my: "20px",
                  pb: "10px",
                }}
              >
                <img
                  src={item.link}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "1000px",
                  }}
                />
                <Box sx={{ position: "absolute", top: "5%", left: "10%" }} >
                  <Typography sx={{ fontSize: { xs: "30px", sm: "45px",lg:"60px" }, fontWeight: "medium" }}>
                    Lifestyle collection <br />
                    <span style={{ fontSize: "60px", fontWeight: "bold" }}>
                      {item.text}
                    </span>
                    <br /> SALE UP TO{" "}
                    <span style={{ color: "", fontWeight: "bold" }}>
                      45% OFF
                    </span>
                    <br />
                    <span style={{ fontSize: "18px" }}>
                      Get Free Shipping Orders Over 1500 EGP
                    </span>
                    <br />
                    <button
                      className="shopNow"
                      
                    >
                      SHOP NOW
                    </button>
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Hero;
