import "./NewlyReleasedMovies.css";
import NewMoviesCards from "./NewMovieCards/Newcards";
import { useEffect, useState } from "react";

function NewMovies(){
 
    const [movie, setMovie] = useState([]);

     useEffect(()=>{
        fetchmovieNew();
     },[])

     const fetchmovieNew = async () =>{
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=e6ab84494747e236db14b7345eded3f3"
        )

        const data = await response.json()
        setMovie(data.results)
        console.log(data)
     }


    return(
        <>
        <p id="sectionheading">Newly Released</p>
        <div id="ContainerNewMovies">
             {movie.slice(0,5).map((movie)=>(<NewMoviesCards key={movie.id} movie={movie}/>))}
        </div>
        </>
    )
}

export default NewMovies;