import "./UpcomingMovieCards.css";

function UpcomingMovieCards({movie}){

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
    <div className="UpcomingMovieCards">
        <button className="wishlistUpcomingMovies" onClick={() => addToWishlist(movie)}>❤</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="cardposterUpcomingMovies"
      />

      <div className="cardInfoUpcomingMovies">
        <h4 className="detailsUpcomingMovies">{movie.original_title}</h4>
        <p className="detailsUpcomingMovies">{movie.release_date}</p>
        <p className="detailsUpcomingMovies">⭐{rating}</p>
        <p className="detailsUpcomingMovies" id="overviewUpcomingMovies">{movie.overview.slice(0,80) + ".."}</p>
      </div>
    </div>
  );
}

export default UpcomingMovieCards;
