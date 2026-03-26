import "./Newcards.css";

function NewMoviesCards({movie}){

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
    <div className="NewMoviesCards">
        <button className="wishlist" onClick={() => addToWishlist(movie)}>❤</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="cardposter"
      />

      <div className="cardInfo">
        <h4 className="details">{movie.original_title}</h4>
        <p className="details">{movie.release_date}</p>
        <p className="details">⭐{rating}</p>
        <p className="details" id="overview">{movie.overview.slice(0,80) + ".."}</p>
      </div>
    </div>
  );
}

export default NewMoviesCards;
