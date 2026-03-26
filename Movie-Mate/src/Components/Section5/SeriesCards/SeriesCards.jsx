import "./SeriesCards.css";

function SeriesCards({movie}){

  const rating = Math.round(movie.vote_average)

  return (
    <div className="SeriesCards">
        <button className="wishlistSeries" onClick={() => addToWishlist(movie)}>❤</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="cardposterSeries"
      />

      <div className="cardInfoSeries">
        <h4 className="detailsSeries">{movie.original_name}</h4>
        <p className="detailsSeries">{movie.first_air_date}</p>
        <p className="detailsSeries">⭐{rating}</p>
        <p className="detailsSeries" id="overviewSeries">{movie.overview.slice(0,80) + ".."}</p>
      </div>
    </div>
  );
}

export default SeriesCards;
