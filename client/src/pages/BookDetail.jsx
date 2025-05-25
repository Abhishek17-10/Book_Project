import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";
import ReviewForm from "../components/ReviewForm";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
    api.get(`/reviews?bookId=${id}`).then((res) => setReviews(res.data));
  }, [id]);

  return (
    <div style={{ padding: "1rem" }}>
      {book ? (
        <>
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p>{book.description}</p>

          <h3>Reviews</h3>
          {reviews.length ? (
            reviews.map((r) => (
              <div key={r._id}>
                <p><strong>{r.userId?.name}</strong>: {r.comment} ⭐{r.rating}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}

          <ReviewForm bookId={id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
