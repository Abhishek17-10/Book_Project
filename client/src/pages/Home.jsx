import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>📚 Discover Great Books</h1>
        <p>Browse books, read reviews, and share your thoughts!</p>
        <Link to="/books" className="explore-button">Explore Books</Link>
      </section>

      {/* Highlights */}
      <section className="features-section">
        <h2>Why Use BookReview?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>✨ Curated Books</h3>
            <p>Explore a handpicked selection of bestsellers and classics.</p>
          </div>
          <div className="feature-card">
            <h3>📝 Real Reviews</h3>
            <p>Read honest reviews from a community of readers like you.</p>
          </div>
          <div className="feature-card">
            <h3>🌟 Personalized Ratings</h3>
            <p>Rate and track your favorite books, and discover hidden gems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


