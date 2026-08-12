"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay, Parallax } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import programsData from "@/content/site-data/programs.json";
import ProgramCard from "./ProgramCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styles from "./ProgramsWheel.module.css";

export default function ProgramsWheel({ programs = programsData }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const displayPrograms = [...programs, ...programs, ...programs];

    return (
        <div className={styles.wheelWrapper}>

            <h2 className={styles.carouselTitle}>Our Programs</h2>

            <button ref={prevRef} className={`${styles.navBtn} ${styles.navBtnPrev}`} aria-label="Previous slide">
                <FaChevronLeft className={styles.arrowIcon} />
            </button>
            <button ref={nextRef} className={`${styles.navBtn} ${styles.navBtnNext}`} aria-label="Next slide">
                <FaChevronRight className={styles.arrowIcon} />
            </button>

            <Swiper
                parallax={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                threshold={10}
                touchReleaseOnEdges={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -10,
                    depth: 120,
                    modifier: 1,
                    scale: 0.85,
                    slideShadows: false,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[EffectCoverflow, Navigation, Autoplay, Parallax]}
                className={styles.swiperContainer}
            >
                {displayPrograms.map((program, index) => (
                    <SwiperSlide key={`${program.id || index}-${index}`} className={styles.slide}>
                        <ProgramCard program={program} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}