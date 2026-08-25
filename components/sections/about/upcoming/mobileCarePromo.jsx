import React from 'react';
import Link from 'next/link';
import Image from '@/components/ui/Image';
import styles from './mobileCarePromo.module.css';

const MobileCarePromo = () => {
  return (
    <div className={styles.promoContainer}>
      
      {/* Background Image */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/CommunityAndImpact/commOutreach/TruckSide.jpeg"
          alt="Todu Guam Mobile Care Clinic Truck"
          fill
          className={styles.bgImage}
        />
      </div>

      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>Curious About Our Mobile Care Clinic?</h2>
        <p className={styles.description}>
          We bring free, comprehensive healthcare directly to the communities of Guam that need it most. 
          Learn more about the services our clinic on wheels provides.
        </p>
        
        <Link href="/community/mobileCareClinic" className={styles.button}>
          Explore the Mobile Clinic
        </Link>
      </div>
      
    </div>
  );
};

export default MobileCarePromo;