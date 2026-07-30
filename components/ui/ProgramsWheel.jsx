import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './ProgramsWheel.module.css';

const programs = [
  { name: 'Mobile Care Clinic', url: '/mobile-care-clinic/', img: '/images/programs/mobile-care-clinic-thumb.png' },
  { name: 'Prevention and Outreach', url: '/health-prevention-outreach/', img: '/images/programs/prevention.jpg' },
  { name: 'Healing for Women', url: '/women-health/', img: '/images/programs/women.jpg' },
  { name: 'Patient Navigation & Financial Assistance', url: '/patient-navigation-financial-assistance/', img: '/images/programs/navigation.jpg' },
  { name: 'Sliding Fee Discount Program', url: '/tgf-sliding-fee-feb-26/', img: '/images/programs/sliding-fee.jpg' },
  { name: 'CARES Program', url: '/cares/', img: '/images/programs/cares.jpg' },
  { name: 'Mind Care', url: '/mind-care/', img: '/images/programs/mind-care.jpg' },
];

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