import { useState } from "react";
import styles from "../styles/friends.module.css";
import Footer from "./footer";

export default function Friends() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettingsModal = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share This App",
          text: "Check out this amazing app!",
          url: window.location.href,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert("Web Share API is not supported in your browser.");
    }
  };
  // Dummy data - Replace with real data from API or database
  const friends = [
    { id: 1, name: "YASHAS RAVIKUMAR", coins: "100K" },
    { id: 2, name: "NIVEDITHA K", coins: "90K" },
    { id: 3, name: "GAGAN M S", coins: "10.7K" },
    { id: 4, name: "SUHAS JAIN", coins: "2K" },
    { id: 5, name: "ANAND V", coins: "1.5K" },
    { id: 6, name: "JAISURYA", coins: "1K" },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <img
          src="/share-icon.png"
          alt="Share"
          className={styles.shareIcon}
          onClick={handleShare}
        />
        <h1 className={styles.heading}>
          <span className={styles.supr}>SUPR</span>
          <span className={styles.human}>HUMAN</span>
        </h1>
        <img
          src="/settings.png"
          alt="Settings"
          className={styles.settingsIcon}
          onClick={toggleSettingsModal}
        />
      </div>

      <div className={styles.inviteContainer}>
        <p className={styles.inviteText}>
          INVITE MORE <span className={styles.supr}>SUPRHUMANS!</span>
        </p>
        <div className={styles.inviteBlock}>
          <img src="/gift.png" alt="Gift" className={styles.giftIcon} />
          <div className={styles.inviteDetails}>
            <p className={styles.inviteLabel}>INVITE A FRIEND !</p>
            <p className={styles.receiveText}>
              RECEIVE <span className={styles.supr}>+1,000</span>
              <img
                src="/coins-per-tap.png"
                alt="Coins"
                className={styles.coinIcon}
              />{" "}
              EACH
            </p>
          </div>
        </div>
      </div>

      <div className={styles.friendsList}>
        <p className={styles.friendsListTitle}>
          LIST OF YOUR <span className={styles.supr}>SUPR</span> FRIENDS!
        </p>

        {friends.map((friend) => (
          <div key={friend.id} className={styles.friend}>
            <img
              src="/friend-id.png"
              alt="Friend Icon"
              className={styles.friendIcon}
            />
            <span className={styles.friendName}>{friend.name}</span>
            <div className={styles.friendCoins}>
              <img
                src="/coins-per-tap.png"
                alt="Coins"
                className={styles.coinIcon}
              />
              <span className={styles.coinAmount}>{friend.coins}</span>
            </div>
          </div>
        ))}
      </div>

      <Footer />

      {isSettingsOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={toggleSettingsModal}
            >
              <img src="/cross.png" alt="Close" />
            </button>
            <div className={styles.formContainer}>
              <form>
                <label htmlFor="name" className={styles.label}>
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="NAME"
                  className={styles.inputField}
                />

                <label htmlFor="gender" className={styles.label}>
                  GENDER
                </label>
                <select id="gender" className={styles.selectField}>
                  <option value="" disabled hidden>
                    SELECTION
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <label htmlFor="country" className={styles.label}>
                  COUNTRY
                </label>
                <select id="country" className={styles.selectField}>
                  <option value="" disabled hidden>
                    SELECTION
                  </option>
                  {/* Add country options here */}
                </select>

                <label htmlFor="email" className={styles.label}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="EMAIL"
                  className={styles.inputField}
                />

                <button type="button" className={styles.actionButton}>
                  CONNECT WALLET
                </button>
                <button type="button" className={styles.actionButton}>
                  CHANGE CHARACTER
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
