import "./PopularMovieCards.css";

function PopularMovieCards({movie}){

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
    <div className="PopularMovieCards">
        <button className="wishlistPopularMovies" onClick={() => addToWishlist(movie)}>❤</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="cardposterPopularMovies"
      />

      <div className="cardInfoPopularMovies">
        <h4 className="detailsPopularMovies">{movie.original_title}</h4>
        <p className="detailsPopularMovies">{movie.release_date}</p>
        <p className="detailsPopularMovies">⭐{rating}</p>
        <p className="detailsPopularMovies" id="overviewPopularMovies">{movie.overview.slice(0,80) + ".."}</p>
      </div>
    </div>
  );
}

export default PopularMovieCards;
