"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import programsData from "@/content/site-data/programs.json";
import ProgramCard from "./ProgramCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styles from "./ProgramsWheel.module.css";

const IoIosArrowBack = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em">
        <path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.4L201.5 256z" />
    </svg>
);

const IoIosArrowForward = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em">
        <path d="M160 115.4l20.7-19.4L352 256 180.7 416 160 396.6 310.5 256z" />
    </svg>
);

export default function ProgramsWheel({ programs = programsData }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const displayPrograms = [...programs, ...programs, ...programs];

    return (
        <div className={styles.wheelWrapper}>
            <button ref={prevRef} className={`${styles.navBtn} ${styles.navBtnPrev}`} aria-label="Previous slide">
                <IoIosArrowBack className={styles.arrowIcon} />
            </button>
            <button ref={nextRef} className={`${styles.navBtn} ${styles.navBtnNext}`} aria-label="Next slide">
                <IoIosArrowForward className={styles.arrowIcon} />
            </button>

            <Swiper
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
                modules={[EffectCoverflow, Navigation, Autoplay]}
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