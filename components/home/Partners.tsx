"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
const imgLinks = [
  "/images/Reskilll.png",
  "/images/Give My Certificate.png",
  "/images/Hack2Skill.png",
  "/images/c3u.png",
  "/images/CN.png",
  "/images/CB.png",
  "/images/sparkar.png",
  "/images/uipath.png",
  "/images/azdevlogonew.png",
  "/images/mukand.png",
  "/images/github.png",
  "/images/snapchat.png",
  "/images/meta.png",
  "/images/microsoft.png",
  "/images/partner-google.png",
  "/images/partner-polka.png",
  "/images/digitalocean-partner.png",
];
const Partners = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-10">Our Partners</h1>

        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              spaceBetween: 20,
              centeredSlides: false,
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {imgLinks.map((e, index) => (
            <SwiperSlide key={index}>
              <div className="partner-imgwrap">
                <Image
                  src={e}
                  width={0}
                  height={0}
                  alt="Banner"
                  className="img-responsive"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
