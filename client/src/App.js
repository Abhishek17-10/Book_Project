import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import ReviewForm from "./pages/ReviewForm"; // ✅ Add review form
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/books/:id/review" element={<ReviewForm />} /> {/* ✅ Review Page */}
            <Route path="/users/:id" element={<UserProfile />} />
            
            {/* Optional: Add 404 fallback */}
            <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



