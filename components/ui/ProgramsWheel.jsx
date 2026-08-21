import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './ProgramsWheel.module.css';

export default function ProgramsWheel() {
  return (
    <section className={styles.wheelContainer}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiper}
      >
        {programs.map((program, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Link href={program.url} className={styles.cardLink}>
              <div className={styles.imageWrapper}>
                {/* Replace with next/image if preferred */}
                <img src={program.img} alt={program.name} />
                <div className={styles.overlay}>
                  <h3>{program.name}</h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}