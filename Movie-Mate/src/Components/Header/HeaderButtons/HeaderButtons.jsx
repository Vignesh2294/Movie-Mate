import "./HeaderButtons.css";

function HeaderButtons(){

    function ScrollTopMovies(){
        document.getElementById("TopMoviesContainer").scrollIntoView({behavior: "smooth"})
    }

    function ScrollUpcomingMovies(){
        document.getElementById("UpcomingMoviesContainer").scrollIntoView({behavior:"smooth"})
    }

    function ScrollTrendingMovies(){
        document.getElementById("PopularMoviesContainer").scrollIntoView({behavior: "smooth"})
    }

    function ScrollSeries(){
        document.getElementById("SeriesContainer").scrollIntoView({behavior: "smooth"})
    }
    
    return(
        <>
            <button className="Headerbuttons" onClick={ScrollTopMovies}>Top Rated</button>
            <button className="Headerbuttons" onClick={ScrollTrendingMovies}>Trending</button>
            <button className="Headerbuttons" onClick={ScrollUpcomingMovies}>Upcoming Movies</button>
            <button className="Headerbuttons" onClick={ScrollSeries}>Series</button> 
        </>
    )
}

export default HeaderButtons;