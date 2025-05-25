import { useState } from "react";
import { api } from "../api";
import "./ReviewForm.css";

const ReviewForm = ({ bookId }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/reviews", {
      bookId,
      userId: "YOUR_USER_ID_HERE", // Replace with real user ID
      comment,
      rating: Number(rating),
    });
    alert("Review submitted!");
    setComment("");
    setRating(5);
  };

  return (
    <form className="review-form fade-in" onSubmit={handleSubmit}>
      <h4>Leave a Review</h4>
      <textarea
        placeholder="Your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)} required>
        {[5, 4, 3, 2, 1].map((val) => (
          <option key={val} value={val}>{val} Stars</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;

