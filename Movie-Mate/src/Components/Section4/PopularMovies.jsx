import "./PopularMovies.css";
import PopularMovieCards from "./PopularMovieCards/PopularMovieCards";
import { useEffect, useState } from "react";

function PopularMovies(){

    const [movie, setMovie] = useState([]);

     useEffect(()=>{
        fetchmovieNew();
     },[])

     const fetchmovieNew = async () =>{
        const response = await fetch(
            "https://api.themoviedb.org/3/trending/movie/week?api_key=e6ab84494747e236db14b7345eded3f3"
        )

        const data = await response.json()
        setMovie(data.results)
        console.log(data)
     }


    return(
        <>
        <p id="sectionheading4">Trending This Week</p>
        <div id="PopularMoviesContainer">
             {movie.slice(0,10).map((movie)=>(<PopularMovieCards key={movie.id} movie={movie}/>))}
        </div>
        </>
    )
}

export default PopularMovies;