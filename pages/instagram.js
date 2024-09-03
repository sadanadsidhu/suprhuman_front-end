// instagram.js
import React from 'react';
import styles from '../styles/instagram.module.css';

const InstagramPage = ({ onClose }) => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.instagram.com/your_profile'; // Replace with your actual Instagram profile URL
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.subscribeBox}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>X</button>

        {/* Instagram Icon */}
        <img src="/instagram.png" alt="Instagram" className={styles.instagramIcon} />

        {/* Text Content */}
        <p className={styles.text}>FOLLOW OUR INSTAGRAM</p>

        {/* Check Button */}
        <button className={styles.checkButton} onClick={handleButtonClick}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default InstagramPage;
