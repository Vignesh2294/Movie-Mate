import "./TopMovieCard.css";

function TopMovieCard({movie}){

  const rating = Math.round(movie.vote_average)

  const addToWishlist = (movie) => {
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];

  const alreadyAdded = existing.find((item) => item.id === movie.id);

  if (!alreadyAdded) {
    const updated = [...existing, movie];
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }
};

  return (
    <div className="TopMovieCards">
        <button className="wishlistTopMovies" onClick={() => addToWishlist(movie)}>❤</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="cardposterTopMovies"
      />

      <div className="cardInfoTopMovies">
        <h4 className="detailsTopMovies">{movie.original_title}</h4>
        <p className="detailsTopMovies">{movie.release_date}</p>
        <p className="detailsTopMovies">⭐{rating}</p>
        <p className="detailsTopMovies" id="overviewTopMovies">{movie.overview.slice(0,80) + ".."}</p>
      </div>
    </div>
  );
}

export default TopMovieCard;
