import React, { useState, useEffect } from "react";
import styles from "../styles/profile.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Profile() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("SELECT");
  const [country, setCountry] = useState("SELECT");
  const [email, setEmail] = useState("");

  const router = useRouter(); // Initialize useRouter

  const genderOptions = ["MALE", "FEMALE", "OTHER"];
  const countryOptions = ["USA", "Canada", "UK", "India", "Australia"];

  useEffect(() => {
    // Check if token and userId are stored in localStorage
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      router.push("/home");
    }
  }, [router]);

  const handleSubmit = async () => {
    const data = {
      name: name,
      gender: gender.toLowerCase(),
      country: country.toLowerCase(),
      email: email,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        data
      );

      // Log the entire response to the console for debugging
      console.log("API Response:", response);

      // Check if response and response.data exist
      if (response && response.data && response.data.user) {
        // Extract userToken and _id from response.data.user
        const userToken = response.data.user.userToken; // Corrected extraction
        const userId = response.data.user._id; // Corrected extraction

        if (userToken && userId) {
          // Store the token and user ID in localStorage
          localStorage.setItem("token", userToken);
          localStorage.setItem("userId", userId);

          // Show success toast message
          toast.success("Signup successfully!", {
            autoClose: 10000, // Show for 10 seconds
          });

          // Delay navigation to the next page
          setTimeout(() => {
            router.push("/chooseCharacter");
          }, 10000); // Delay of 10 seconds
        } else {
          // Log specific missing fields
          if (!userToken) {
            console.error("userToken is missing in the response");
          }
          if (!userId) {
            console.error("_id is missing in the response");
          }

          // Display error toast message
          toast.error("Failed to retrieve user details from the response.");
        }
      } else {
        console.error("Invalid response format:", response);
        toast.error("Unexpected response format from the server.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Failed to register user. Please try again.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>
        <span className={styles.supr}>SUPR</span>
        <span className={styles.human}>HUMAN</span>
      </h1>
      <div className={styles.formContainer}>
        <form>
          <label htmlFor="name" className={styles.label}>
            ENTER NAME
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="NAME"
            className={styles.inputField}
          />

          <label htmlFor="gender" className={styles.label}>
            SELECT GENDER
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={styles.selectField}
          >
            <option value="" disabled hidden>
              SELECT
            </option>
            {genderOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>

          <label htmlFor="country" className={styles.label}>
            SELECT COUNTRY
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={styles.selectField}
          >
            <option value="" disabled hidden>
              SELECT
            </option>
            {countryOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>

          <label htmlFor="email" className={styles.label}>
            ENTER EMAIL
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            className={styles.inputField}
          />

          <div className={styles.disclaimer}>
            <strong>DISCLAIMER:</strong> EMAIL PROVIDED NOW CANNOT BE <br />
            CHANGED IN THE FUTURE FOR AIRDROPS.
          </div>
        </form>
      </div>
      <button
        type="button"
        className={styles.nextButton}
        onClick={handleSubmit}
      >
        NEXT <img src="/arrow-black.png" alt="Arrow" className={styles.arrow} />
      </button>
      <ToastContainer />
    </div>
  );
}
