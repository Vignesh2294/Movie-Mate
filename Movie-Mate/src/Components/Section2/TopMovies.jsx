import "./TopMovies.css";
import TopMovieCard from "./TopRatedMovies/TopMovieCard";
import { useEffect, useState } from "react";

function TopMovies(){

    const [movie, setMovie] = useState([]);

     useEffect(()=>{
        fetchmovieNew();
     },[])

     const fetchmovieNew = async () =>{
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=e6ab84494747e236db14b7345eded3f3"
        )

        const data = await response.json()
        setMovie(data.results)
        console.log(data)
     }


    return(
        <>
        <p id="sectionheading2">Top Rated Movies</p>
        <div id="TopMoviesContainer">
             {movie.slice(0,10).map((movie)=>(<TopMovieCard key={movie.id} movie={movie}/>))}
        </div>
        </>
    )
}

export default TopMovies;