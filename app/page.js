"use client";
import { useState } from "react";
import styles from "./ReviewCard.module.css";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [safety, setSafety] = useState(null);
  const [communication, setCommunication] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [praise, setPraise] = useState("");

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  const handleSelect = (setter, value) => {
    setter(value);
  };

  return (
    <div className={styles.card}>
      <h2>Leave a Review</h2>

      <div className={styles.section}>
        <h3>Overall Rating</h3>
        <div className={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${styles.star} ${
                index < rating ? styles.filled : ""
              }`}
              onClick={() => handleStarClick(index)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Safety</h3>
        <button
          className={`${styles.safetyButton} ${
            safety === "Good" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setSafety, "Good")}
        >
          Good
        </button>
        <button
          className={`${styles.safetyButton} ${
            safety === "Bad" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setSafety, "Bad")}
        >
          Bad
        </button>
        <button
          className={`${styles.safetyButton} ${
            safety === "Better" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setSafety, "Better")}
        >
          Better
        </button>
      </div>

      <div className={styles.section}>
        <h3>Communication</h3>
        <button
          className={`${styles.communicationButton} ${
            communication === "Good" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setCommunication, "Good")}
        >
          Good
        </button>
        <button
          className={`${styles.communicationButton} ${
            communication === "Bad" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setCommunication, "Bad")}
        >
          Bad
        </button>
        <button
          className={`${styles.communicationButton} ${
            communication === "Better" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setCommunication, "Better")}
        >
          Better
        </button>
      </div>

      <div className={styles.section}>
        <h3>Would you recommend this?</h3>
        <button
          className={`${styles.thumb} ${
            recommendation === "yes" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setRecommendation, "yes")}
        >
          👍
        </button>
        <button
          className={`${styles.thumb} ${
            recommendation === "no" ? styles.selected : ""
          }`}
          onClick={() => handleSelect(setRecommendation, "no")}
        >
          👎
        </button>
      </div>

      <div className={styles.section}>
        <h3>Praise</h3>
        <select value={praise} onChange={(e) => setPraise(e.target.value)}>
          <option value="">Select...</option>
          <option value="Good">Good</option>
          <option value="Bad">Bad</option>
          <option value="Better">Better</option>
        </select>
      </div>

      <div className={styles.section}>
        <h3>Additional Comments</h3>
        <textarea rows="4" placeholder="Write your comments here..." />
      </div>
    </div>
  );
}
