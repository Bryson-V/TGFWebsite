"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./directorCards.module.css";

const boardData = {
  heading: "Executive Board Members",
  members: [
    {
      id: "1",
      name: "Dennis G. Rodriguez",
      role: "Secretary of the Board",
      image: "/images/directors/Dennis.webp", 
      description: "Dennis has over 20 years of experience in administrative leadership and is dedicated to fostering community health initiatives across the island."
    },
    {
      id: "2",
      name: "Dr. Yolanda Camma",
      role: "Secretary of the Board",
      image: "/images/directors/Yolanda.webp",
      description: "Dr. Camma is a passionate advocate for accessible healthcare, bringing a wealth of medical expertise to the foundation's strategic planning."
    },
    {
      id: "3",
      name: "Lena",
      role: "Board Member-At-Trustee",
      image: "/images/directors/Lena.webp",
      description: "Lena specializes in community outreach and has been instrumental in growing our grassroots volunteer networks."
    },
    {
      id: "4",
      name: "Dennis",
      role: "Board Member-At-Trustee",
      image: "/images/directors/Dennis.webp",
      description: "Dedicated to the foundation's mission, Dennis works closely with local partners to ensure funding and resources reach those in need."
    },
    {
      id: "5",
      name: "Dennis",
      role: "Board Member-At-Trustee",
      image: "/images/directors/Dennis.webp",
      description: "A lifelong resident of Guam, Dennis serves as a crucial voice for patient advocacy and support services."
    },
    {
      id: "6",
      name: "Dennis",
      role: "Board Member-At-Trustee",
      image: "/images/directors/Dennis.webp",
      description: "A lifelong resident of Guam, Dennis serves as a crucial voice for patient advocacy and support services."
    }
  ]
};

export default function BoardOfDirectors() {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{boardData.heading}</h2>
        </header>

        <div className={styles.grid}>
          {boardData.members.map((member) => (
            <div 
              key={member.id} 
              className={styles.card}
              onClick={() => setSelectedMember(member)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.infoWrapper}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
              
              <p className={styles.modalEyebrow}>Board of Directors Profile</p>
              
              <div className={styles.modalHeader}>
                <div className={styles.modalAvatarWrapper}>
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className={styles.modalAvatar}
                  />
                </div>
                <div>
                  <h4 className={styles.modalName}>{selectedMember.name}</h4>
                  <p className={styles.modalRole}>{selectedMember.role}</p>
                </div>
              </div>

              <div className={styles.modalBody}>
                <h5 className={styles.descriptionLabel}>About</h5>
                <div className={styles.descriptionBox}>
                  <p>{selectedMember.description || "Description coming soon."}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}