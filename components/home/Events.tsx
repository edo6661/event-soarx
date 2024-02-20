"use client"; // temp
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Event } from "@prisma/client";
import { Autoplay, Navigation } from "swiper/modules";
import { formatDate } from "@/utils";
import Image from "next/image";
import Button from "../Button";

const Events = ({ allEvents }: { allEvents: Event[] }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center">Recent Events</h1>
        <section className="all-events pt-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="testimonial-swiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              800: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {allEvents.map((e) => (
              <SwiperSlide key={e.id}>
                <div className="events-box aim-box">
                  <div className="events-img">
                    <Image
                      src={e.image}
                      alt="Banner"
                      width={267}
                      height={500}
                      className="img-responsive"
                    />
                  </div>
                  <div className="event-content">
                    <h2 className="text-2xl font-medium">{e.title}</h2>
                    <p className="pt-2">
                      {e.description.slice(0, 180) + "..."}
                    </p>
                    <p className="pt-2 flex items-center gap-2 font-medium">
                      <AiOutlineCalendar />
                      {formatDate(e.createdAt.toString())}
                    </p>
                    <div className="pt-4">
                      <Link href={`/${e.title}`}>
                        <button className="btn-primary">Register</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center">
            <Link href={"/events"}>
              <Button name="View All" />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Events;
