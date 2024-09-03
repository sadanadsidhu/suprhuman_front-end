import React, { useState } from "react";
import styles from "../styles/upgrade.module.css";
import Footer from "./footer";
import { useRouter } from "next/router";

const enhancements = [
  {
    id: 1,
    name: "HONESTY",
    icon: "/images/enhancements/honesty.png",
    coinMin: "+8",
    level: 1,
    cost: "1.4k",
    quote: "BEING TRUTHFUL AND TRANSPARENT IN WORDS AND ACTIONS.",
  },
  {
    id: 2,
    name: "KINDNESS",
    icon: "/images/enhancements/kindness.png",
    coinMin: "+11",
    level: 1,
    cost: "2.2k",
    quote: "FACING FEARS AND CHALLENGES BRAVELY AND WITH DETERMINATION.",
  },
  {
    id: 3,
    name: "COURAGE",
    icon: "/images/enhancements/courage.png",
    coinMin: "+10",
    level: 1,
    cost: "2k",
    quote: "REMAINING CALM AND COMPOSED IN THE FACE OF DELAYS OR DIFFICULTIES.",
  },
  {
    id: 4,
    name: "INTEGRITY",
    icon: "/images/enhancements/integrity.png",
    coinMin: "+18",
    level: 1,
    cost: "2.5k",
    quote: "FEELING AND EXPRESSING THANKFULNESS AND APPRECIATION.",
  },
  {
    id: 5,
    name: "PATIENCE",
    icon: "/images/enhancements/patience.png",
    coinMin: "+12",
    level: 1,
    cost: "1.8k",
    quote: "WILLINGNESS TO GIVE AND SHARE FREELY WITH OTHERS.",
  },
  {
    id: 6,
    name: "GRATITUDE",
    icon: "/images/enhancements/gratitude.png",
    coinMin: "+21",
    level: 1,
    cost: "1.2k",
  },
  {
    id: 7,
    name: "GENEROSITY",
    icon: "/images/enhancements/generosity.png",
    coinMin: "+20",
    level: 1,
    cost: "1.5k",
  },
  {
    id: 15,
    name: "FLEXIBILITY",
    icon: "/images/enhancements/.png",
    coinMin: "+10",
    level: 1,
    cost: "1.8k",
  },
  {
    id: 16,
    name: "CREATIVITY",
    icon: "/images/enhancements/creativity.png",
    coinMin: "+8",
    level: 1,
    cost: "1.6k",
  },
  {
    id: 17,
    name: "DEPENDABILITY",
    icon: "/images/enhancements/dependability.png",
    coinMin: "+11",
    level: 1,
    cost: "1.9k",
  },
];

const restraints = [
  {
    id: 1,
    name: "ARROGANCE",
    icon: "/images/restraints/arrogance.png",
    coinMin: "+6",
    level: 1,
    cost: "1.8k",
  },
  {
    id: 2,
    name: "SELFISHNESS",
    icon: "/images/restraints/selfishness.png",
    coinMin: "+11",
    level: 1,
    cost: "2.9k",
  },
  {
    id: 3,
    name: "SADISM",
    icon: "/images/restraints/sadism.png",
    coinMin: "+8",
    level: 1,
    cost: "1.8k",
  },
  {
    id: 4,
    name: "SADISM",
    icon: "/images/restraints/sadism.png",
    coinMin: "+8",
    level: 1,
    cost: "1.8k",
  },
  {
    id: 5,
    name: "SADISM",
    icon: "/images/restraints/sadism.png",
    coinMin: "+8",
    level: 1,
    cost: "1.8k",
  },
  {
    id: 6,
    name: "SADISM",
    icon: "/images/restraints/sadism.png",
    coinMin: "+8",
    level: 1,
    cost: "1.8k",
  },
];

const suprUpgrade = [
  {
    id: 1,
    name: "SUPR HELMET",
    icon: "/images/suprUpgrade/helmet.png",
    coinMin: "+6",
    level: 1,
    cost: "1.8k",
    quote: "honesty is the key",
  },
  {
    id: 2,
    name: "SUPR GLOVES",
    icon: "/images/suprUpgrade/gloves.png",
    coinMin: "+11",
    level: 1,
    cost: "2.9k",
  },
  {
    id: 3,
    name: "SUPR GOGGLES",
    icon: "/images/suprUpgrade/goggles.png",
    coinMin: "+8",
    level: 1,
    cost: "1.8k",
  },
  {
    id: 4,
    name: "SUPR WATCH",
    icon: "/images/suprUpgrade/Watch.png",
    coinMin: "+18",
    level: 1,
    cost: "1.7k",
  },
  {
    id: 5,
    name: "SUPR SHOES",
    icon: "/images/suprUpgrade/Shoes.png",
    coinMin: "+11",
    level: 1,
    cost: "1.6k",
  },
];

export default function Upgrade() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ENHANCEMENT");
  const [selectedItem, setSelectedItem] = useState(null);

  const renderDivs = () => {
    let itemsToRender;

    if (activeTab === "ENHANCEMENT") {
      itemsToRender = enhancements;
    } else if (activeTab === "RESTRAINTS") {
      itemsToRender = restraints;
    } else {
      itemsToRender = suprUpgrade;
    }

    return itemsToRender.map((item) => (
      <div
        key={item.id}
        className={
          activeTab === "SUPR UPGRADE"
            ? styles.suprDivContainer
            : styles.divContainer
        }
        onClick={() => setSelectedItem(item)}
      >
        <div className={styles.itemHeader}>
          <p className={styles.itemName}>{item.name}</p>
        </div>

        {/* Different content structure for SUPR UPGRADE */}
        {activeTab === "SUPR UPGRADE" ? (
          <div className={styles.suprContentContainer}>
            <div className={styles.suprLeftContent}>
              <div className={styles.imageCircle}>
                <img
                  src={item.icon}
                  alt={item.name}
                  className={styles.suprIcon}
                />
              </div>
            </div>
            <div className={styles.suprRightContent}>
              <div className={styles.suprUpperRight}>
                <div className={styles.levelContainerSupr}>
                  <p>LEVEL</p>
                  <p>{item.level}</p>
                </div>
                <div className={styles.costContainerSupr}>
                  <p>COST</p>
                  <p>{item.cost}</p>
                </div>
              </div>
              <div className={styles.suprBottomRight}>
                <p className={styles.coinMin}>COIN/MIN</p>
                <p className={styles.coinValue}>{item.coinMin}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.contentContainer}>
            <div className={styles.leftContent}>
              <img src={item.icon} alt={item.name} className={styles.icon} />
              <p className={styles.coinMin}>COIN/MIN</p>
              <p className={styles.coinValue}>{item.coinMin}</p>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.levelContainer}>
                <p>LEVEL</p>
                <p>{item.level}</p>
              </div>
              <div className={styles.costContainer}>
                <p>COST</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
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
          onClick={() => router.push("/settings")}
        />
      </div>
      <div className={styles.tabContainer}>
        {["ENHANCEMENT", "RESTRAINTS", "SUPR UPGRADE"].map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={styles.divsContainer}>{renderDivs()}</div>
      <Footer />
      {/* Pop-up Modal */}
      // Inside the return statement where you define the Pop-up Modal
      {selectedItem && (
        <div
          className={styles.popUpOverlay}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={styles.popUpContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.popUpHeader}>
              <div
                className={styles.popUpImageCircle}
                style={{ backgroundColor: "black", borderRadius: "50%" }}
              >
                <img
                  src={selectedItem.icon}
                  alt={selectedItem.name}
                  className={styles.popUpIcon}
                />
              </div>
              <h2 className={styles.popUpHeading}>{selectedItem.name}</h2>
              <img
                src="/cross.png"
                alt="Close"
                className={styles.closeIcon}
                onClick={() => setSelectedItem(null)} // Closes the pop-up
              />
            </div>
            <p className={styles.popUpQuote} style={{ marginBottom: "10px" }}>
              {selectedItem.quote}
            </p>
            <div
              className={styles.popUpDetails}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div className={styles.levelContainerPop}>
                <p>LEVEL</p>
                <p>{selectedItem.level}</p>
              </div>
              <div className={styles.costContainerPop}>
                <p>COST</p>
                <p>{selectedItem.cost}</p>
              </div>
              <div className={styles.coinContainerPop}>
                <p>COIN/MIN</p>
                <p>{selectedItem.coinMin}</p>
              </div>
            </div>
            <button
              className={styles.upgradeButton}
              style={{ backgroundColor: "#FF7500", color: "black" }}
            >
              UPGRADE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
