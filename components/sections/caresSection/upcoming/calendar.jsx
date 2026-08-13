import React from 'react';
import styles from './calendar.module.css';

export default function Calendar() {
  return (
    <section className={styles.calendarContainer}>
      <h2 className={styles.title}>Upcoming Outreaches & Events</h2>
      
      <div className={styles.iframeWrapper}>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Pacific%2FGuam&showPrint=0&title=Test%20Calendar&src=Y19hNjIyNTY5YmI4ZDZjZjI3YjkwN2Q1NDQ2YWE1ZGEzZDJkY2Q0YTZmODk4ZDE4N2Q2YWFmODFhMDIyYzllMWU2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18yMTc0Yjc5NDY5NDYyOGI1ZjU3NWU4NzAzNzJkNTY2ZjI4YWI4MTRiZTlmY2VjZDg3ZTI4YmU3ZGIxNGJhYmI1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23d50000&color=%2333b679" 
          style={{ border: 'solid 1px #777' }} 
          width="100%" 
          height="600" 
          frameBorder="0" 
          scrolling="no"
          title="Todu Guam Foundation Events Calendar"
        ></iframe>
      </div>
    </section>
  );
}