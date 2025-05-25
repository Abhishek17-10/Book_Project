// src/components/ReviewForm.jsx
import { useState } from "react";
import { api } from "../api";

const ReviewForm = ({ bookId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/reviews", {
        bookId,
        rating,
        comment,
        userId: "guest", // replace with actual user if available
      });
      setSuccess(true);
      setComment("");
      setRating(5);
    } catch (err) {
      console.error("Review submission failed", err);
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Write a Review</h3>
      {success && <p style={{ color: "green" }}>Review submitted!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Comment:</label>
          <br />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            cols="50"
            required
          ></textarea>
        </div>
        <button type="submit" style={{ marginTop: "10px", padding: "8px 16px" }}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;

