"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Add Autoplay and EffectCoverflow back to your modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import site programs data
import programsData from "@/content/site-data/programs.json";
import ProgramCard from "./ProgramCard";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ProgramsWheel.module.css";

export default function ProgramsWheel({ programs = programsData }) {
  return (
    <div className={styles.wheelWrapper}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        // This makes it rotate automatically
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Keeps autoplaying even after they click/swipe
          pauseOnMouseEnter: true, // Pauses when the user hovers over a card
        }}
        coverflowEffect={{
          rotate: 0,          // Keeps cards flat/facing forward
          stretch: 50,        // Pulls the side cards slightly inward so they don't disappear off screen
          depth: 150,         // Pushes the side cards backward in 3D space
          modifier: 1,        // Normalizes the effect calculation
          scale: 0.8,         // MAGIC SETTING: Adjacent cards become 80%, outer cards become 64%
          slideShadows: false, // Removes default black shadows so they stay solid
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className={styles.swiperContainer}
      >
        {programs.map((program, index) => (
          <SwiperSlide key={program.id || index} className={styles.slide}>
            <ProgramCard program={program} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}