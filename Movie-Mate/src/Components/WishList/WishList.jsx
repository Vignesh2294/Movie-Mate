import { useEffect, useState } from "react";
import "./WishList.css";

function WishList({ setShowWishlist }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  return (
    <div className="wishlist-overlay">
      <div className="wishlist-container">
        <h2>My Wishlist ❤️</h2>

        <button
          className="close-btn"
          onClick={() => setShowWishlist(false)}
        >
          ✖
        </button>

        <div className="wishlist-cards">
          {wishlist.length === 0 ? (
            <p>No movies in wishlist</p>
          ) : (
            wishlist.map((movie) => (
              <div className="wishlist-card" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title || movie.original_name}
                />
                <p>{movie.title || movie.original_name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default WishList;
