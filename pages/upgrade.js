import React, { useState, useEffect } from "react";
import styles from "../styles/upgrade.module.css";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Upgrade() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ENHANCEMENT");
  const [selectedItem, setSelectedItem] = useState(null);
  const [enhancements, setEnhancements] = useState([]);
  const [restraints, setRestraints] = useState([]);
  const [suprUpgrade, setSuprUpgrade] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch enhancements data
      const enhancementsResponse = await fetch(
        "http://localhost:8080/get/all/upgrade"
      );
      const enhancementsData = await enhancementsResponse.json();
      console.log("Enhancements Data:", enhancementsData);
      setEnhancements(enhancementsData[0]?.ENHANCEMENT || []);

      // Fetch restraints data
      const restraintsResponse = await fetch(
        "http://localhost:8080/get/all/restrint"
      );
      const restraintsData = await restraintsResponse.json();
      setRestraints(restraintsData[0]?.RESTRAINTS || []);

      // Fetch SUPR upgrades data
      const suprUpgradeResponse = await fetch(
        "http://localhost:8080/get/all/supergrade"
      );
      const suprUpgradeData = await suprUpgradeResponse.json();
      console.log("SUPRUPGRADE Data:", suprUpgradeData); // Debugging line

      if (Array.isArray(suprUpgradeData)) {
        // Assuming SUPRUPGRADE data is in the first object of the array
        setSuprUpgrade(suprUpgradeData[0]?.SUPRUPGRADE || []);
      } else {
        setSuprUpgrade([]);
      }

      setLoading(false);
    } catch (err) {
      setError("Failed to load data.");
      setLoading(false);
    }
  };

  const handleUpgradeClick = async () => {
    if (!userId || !selectedItem) return;

    try {
      const upgradeId = "66d7368365a71a07bd6b1a67"; // Ensure this ID is available
      const enhancementId = selectedItem._id; // Use selectedItem._id for enhancementId

      // Ensure coinMin is an integer
      const coinMinAsInteger = Math.floor(selectedItem.coinMin);

      // Update user coin
      const coinResponse = await fetch(
        "http://localhost:8080/user/update/coin",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            coinsPerMinute: coinMinAsInteger,
          }),
        }
      );

      if (!coinResponse.ok) {
        throw new Error("Failed to update coin.");
      }
      // Call the second API to update the enhancement
      const upgradeResponse = await fetch(
        `http://localhost:8080/update/upgrade/${upgradeId}/${enhancementId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            level: selectedItem.level,
            cost: selectedItem.cost,
            coinMin: coinMinAsInteger, // Use the integer value here
          }),
        }
      );

      if (!upgradeResponse.ok) {
        throw new Error("Failed to update upgrade.");
      }

      // Handle success
      console.log("Upgrade and coin updated successfully.");
      fetchData(); // Refresh the data to reflect changes
      setSelectedItem(null); // Close the pop-up
    } catch (error) {
      console.error("Error updating coin and upgrade:", error);
    }
  };
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
        onClick={() => {
          console.log("Selected Item:", item);
          setSelectedItem(item);
        }}
      >
        <div className={styles.itemHeader}>
          <p className={styles.itemName}>{item.name}</p>
        </div>

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
              onClick={() => {
                console.log("Upgrade button clicked");
                handleUpgradeClick(); // Call handleUpgradeClick function
              }}
            >
              UPGRADE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
