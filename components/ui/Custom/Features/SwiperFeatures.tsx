"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FeatureCardInterface } from "@/types/CardType";
import { CardFeatures } from "./CardFeatures";
import { motion } from "motion/react";

export const SwiperFeatures = () => {
  const Cards: FeatureCardInterface[] = [
    {
      id: 1,
      title: "Sony",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sony.svg",
    },
    {
      id: 2,
      title: "Bush",
    },
    {
      id: 2,
      title: "Bush",
    },
  ];
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        className="w-full max-w-7xl !py-20"
      >
        {Cards.map((element, index) => (
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + index * 0.1, type: "spring" }}
            >
              <CardFeatures
                key={index}
                title={element.title}
                logo={element.logo}
                id={index}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
