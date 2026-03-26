import { useState } from "react";
import "./Searchbar.css";

function Searchbar() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const addToWishlist = (movie) => {
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];

  const alreadyAdded = existing.find((item) => item.id === movie.id);

  if (!alreadyAdded) {
    const updated = [...existing, movie];
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }
};

  const searchMovies = async (text) => {
    if (text.trim() === "") {
      setMovies([]);
      return;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e6ab84494747e236db14b7345eded3f3&query=${text}`
    );

    const data = await response.json();
    setMovies(data.results);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchMovies(value);
  };

  return (
    <>
      <input
        id="searchbar"
        placeholder="🔍Search"
        value={query}
        onChange={handleChange}
      />

      <div className="search-results">
        {movies.map((movie) => (
          <div className="search-card" key={movie.id}>
            <button className="wishlist" onClick={() => addToWishlist(movie)}>❤</button>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Searchbar;
