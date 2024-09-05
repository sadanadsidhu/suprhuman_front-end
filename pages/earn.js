import { useState, useEffect } from "react";
import styles from "../styles/earn.module.css";
import Footer from "./footer";
import { useRouter } from "next/router";
import WatchVideos from "./watchVideos";
import SubscribePage from "./youtube";
import TelegramPage from "./telegram";
import InstagramPage from "./instagram";
import TwitterPage from "./twitter";
import DailyReward from "./daily-reward"; // Import the DailyReward component

export default function Earn() {
  const router = useRouter();

  const [isWatchVideosOpen, setWatchVideosOpen] = useState(false);
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [isTelegramOpen, setTelegramOpen] = useState(false);
  const [isInstagramOpen, setInstagramOpen] = useState(false);
  const [isTwitterOpen, setTwitterOpen] = useState(false);
  const [isDailyRewardOpen, setDailyRewardOpen] = useState(false); // New state for DailyReward popup
  const [isInviteMoreOpen, setInviteMoreOpen] = useState(false);

  // ////////////////////////////////////////////////////////////////////////////////////////
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  ///////////////////////////////////////////////////////////////////////////////////////////

  const handleClosePopUp = () => {
    setWatchVideosOpen(false);
    setSubscribeOpen(false);
    setTelegramOpen(false);
    setInstagramOpen(false);
    setTwitterOpen(false);
    setDailyRewardOpen(false);
    setInviteMoreOpen(false);
  };

  // /////////////////////////////////////////////////////////////////////////////////////////
  const toggleSettingsModal = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  // ////////////////////////////////////////////////////////////////////////////////////////////////

  const youtubeTasks = [
    { id: 1, title: "VIDEO TITLE", link: "/video1" },
    { id: 2, title: "VIDEO TITLE", link: "/video2" },
  ];

  return (
    ///////////////////////////////////////////////
    <div className={styles.pageContainer}>
      <div className={styles.header}>
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
      <p className={styles.earnMoreText}>
        EARN MORE <span className={styles.coinsText}>COINS!</span>
      </p>
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.imageCircle}>
        <img src="/dollar-white.png" className={styles.dollarIcon} />
      </div>
      {/* //////////////////////////////////////////////////////////////////// */}
      <div
        className={styles.airdropContainer}
        onClick={() => window.open("https://shorturl.at/c8L4l")}
      >
        <img
          src="/youtube-icon-earn.png"
          alt="YouTube Icon"
          className={styles.airdropIcon}
        />
        <p className={styles.airdropText}>CONTENT CREATOR AIRDROP</p>
      </div>
      <p className={styles.noteText}>
        NOTE: PLEASE SUBMIT YOUR DETAILS HERE TO BE ELIGIBLE FOR AIRDROP
      </p>
      {/*will add later  */}
      {/* <div className={styles.tasksContainer}>
        <p className={styles.taskLabel}>
          <span className={styles.orangeText}>SUPRHUMAN</span> YOUTUBE CHANNEL TASKS
        </p>

        {youtubeTasks.map(task => (
          <div key={task.id} className={styles.task}>
            <img src="/youtube.png" alt="YouTube Icon" className={styles.taskIcon} />
            <span className={styles.taskTitle}>{task.title}</span>
            <img
              src="/arrow-orange.png"
              alt="Arrow"
              className={styles.arrowIcon}
              onClick={() => setWatchVideosOpen(true)} // Open the watchVideos pop-up
            />
          </div>
        ))}
      </div> */}
      <div className={styles.tasksContainer}>
        <p className={styles.taskLabel}>
          <span className={styles.orangeText}>SUPR</span> TASKS
        </p>

        {/* will add later
         */}
        {/* <div className={styles.task}>
          <img src="/daily-reward.png" alt="Daily Reward Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>DAILY REWARD</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setDailyRewardOpen(true)}
          />
        </div> */}

        {/* will add later */}

        {/* <div className={styles.task}>
          <img src="/youtube.png" alt="YouTube Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>SUBSCRIBE TO OUR YOUTUBE CHANNEL</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setSubscribeOpen(true)} // Open the Subscribe pop-up
          />
        </div> */}

        <div className={styles.task}>
          <img
            src="/telegram.png"
            alt="Telegram Icon"
            className={styles.taskIcon}
          />
          <span className={styles.taskTitle}>JOIN OUR TELEGRAM CHANNEL</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setTelegramOpen(true)} // Open the Telegram pop-up
          />
        </div>

        {/* will add later */}

        {/* <div className={styles.task}>
          <img src="/instagram.png" alt="Instagram Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>FOLLOW OUR INSTAGRAM</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setInstagramOpen(true)} // Open the Instagram pop-up
          />
        </div> */}

        <div className={styles.task}>
          <img
            src="/twitter.png"
            alt="Twitter Icon"
            className={styles.taskIcon}
          />
          <span className={styles.taskTitle}>FOLLOW OUR X</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setTwitterOpen(true)} // Open the Twitter pop-up
          />
        </div>

        <div className={styles.task}>
          <img
            src="/invite-more.png"
            alt="Invite More Icon"
            className={styles.taskIcon}
          />
          <span className={styles.taskTitle}>
            INVITE MORE <span className={styles.orangeText}>SUPRHUMANS !</span>
          </span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => router.push("friends")}
          />
        </div>
      </div>
      <Footer />
      {/* Render Pop-ups */}
      {isWatchVideosOpen && <WatchVideos onClose={handleClosePopUp} />}
      {isSubscribeOpen && <SubscribePage onClose={handleClosePopUp} />}
      {isTelegramOpen && <TelegramPage onClose={handleClosePopUp} />}
      {isInstagramOpen && <InstagramPage onClose={handleClosePopUp} />}
      {isTwitterOpen && <TwitterPage onClose={handleClosePopUp} />}
      {isDailyRewardOpen && (
        <DailyReward onClose={handleClosePopUp} currentDay={1} />
      )}{" "}
      {/* New DailyReward Pop-up */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
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

                <button type="button" className={styles.actionButton1}>
                  CONNECT WALLET
                </button>
                <button type="button" className={styles.actionButton2}>
                  CHANGE CHARACTER
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* ///////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}
