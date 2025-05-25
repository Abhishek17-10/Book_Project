import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} className="book-image" />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <p className="description">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;


