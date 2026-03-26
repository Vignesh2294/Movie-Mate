import "./UpcomingMovies.css";
import UpcomingMovieCards from "./UpcomingMovieCards/UpcomingMovieCards";
import { useEffect, useState } from "react";

function UpcomingMovies(){

    const [movie, setMovie] = useState([]);

     useEffect(()=>{
        fetchmovieNew();
     },[])

     const fetchmovieNew = async () =>{
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=e6ab84494747e236db14b7345eded3f3"
        )

        const data = await response.json()
        setMovie(data.results)
        console.log(data)
     }


    return(
        <>
        <p id="sectionheading3">Upcoming Movies</p>
        <div id="UpcomingMoviesContainer">
             {movie.slice(0,10).map((movie)=>(<UpcomingMovieCards key={movie.id} movie={movie}/>))}
        </div>
        </>
    )
}

export default UpcomingMovies;