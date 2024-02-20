"use client"; // temp
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "../Button";
import { Autoplay } from "swiper/modules";

const BannerImages = [
  "/images/fr1.png",
  "/images/fr2.png",
  "/images/fr3.png",
  "/images/fr4.png",
  "/images/fr5.png",
  "/images/fr6.png",
  "/images/fr7.png",
  "/images/fr8.png",
  "/images/fr9.png",
  "/images/fr10.png",
  "/images/fr11.png",
  "/images/fr12.png",
  "/images/fr13.png",
  "/images/fr14.png",
  "/images/fr15.png",
];
const HomeSlider = () => {
  return (
    <section className="banner-section flex items-center justify-center">
      <div className="container flex banner-container items-center gap-5 justify-between">
        <div className="w-3/6	">
          <h2 className="text-primary text-xl  ">
            Empowering Minds. Unleashing Creativity
          </h2>
          <h1>AR Club</h1>
          <p className="pt-5 text-lg ">
            At AR Club, we believe in harnessing the power of technology to
            shape the future. Our nationwide community brings together
            passionate students, industry experts, and leading companies to
            create an immersive learning environment.
          </p>
          <Button name="Join Us" />
        </div>
        <div className="w-3/6">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              700: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper banner-swiperjs"
          >
            {BannerImages.map((e, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={e}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="banner-img"
                  alt="Banner"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
