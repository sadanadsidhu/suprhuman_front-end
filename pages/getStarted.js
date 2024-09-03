import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/getStarted.module.css";

export default function Getstarted() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // Total duration in ms (5 seconds)
    const intervalDuration = 100; // Interval duration in ms
    const increment = 100 / (duration / intervalDuration); // Progress increment per interval

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + increment : 100));
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      router.push("/profile");
    }
  }, [progress, router]);

  return (
    <div className={styles.pageContainer}>
      {/* Heading Section */}
      <h1 className={styles.heading}>
        <span className={styles.supr}>SUPR</span>
        <span className={styles.human}>HUMAN</span>
      </h1>

      {/* Icon Images */}
      <div className={styles.iconsContainer}>
        <img src="/icon-group.png" alt="Icon 1" className={styles.iconImage} />
      </div>

      {/* Earth and Character Image */}
      <div className={styles.earthCharacterContainer}>
        <img src="/earth.png" alt="Earth" className={styles.earthImage} />
        <img
          src="/char1.png"
          alt="Character"
          className={styles.characterImage}
        />
      </div>

      {/* Text Below the Images */}
      <div className={styles.textContainer}>
        <p className={styles.orangeText}>SUPRHUMAN</p>
        <p className={styles.whiteText}>REVOLUTION BUILT ON</p>
        <p className={styles.blueText}>TON</p>
        <p className={styles.blueText2}>(THE OPEN NETWORK)</p>
      </div>

      {/* Progress Line with Dot */}
      <div className={styles.lineContainer}>
        <div className={styles.line} style={{ width: `${progress}%` }}>
          <div
            className={styles.dot}
            style={{ transform: `translateX(0%)` }}
          ></div>
        </div>
      </div>

      {/* Footer Icons Container */}
      <div className={styles.footerIconsContainer}>
        <div className={styles.iconWrapper1}>
          <img
            src="/telegram.png"
            alt="Telegram"
            className={styles.footerIcon1}
          />
        </div>
        <div className={styles.iconWrapper}>
          <img src="/youtube.png" alt="YouTube" className={styles.footerIcon} />
        </div>
        <div className={styles.iconWrapper}>
          <img
            src="/instagram.png"
            alt="Instagram"
            className={styles.footerIcon}
          />
        </div>
        <div className={styles.iconWrapper1}>
          <img
            src="/twitter.png"
            alt="Twitter"
            className={styles.footerIcon1}
          />
        </div>
      </div>
    </div>
  );
}
