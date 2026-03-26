import "./Series.css";
import SeriesCards from "./SeriesCards/SeriesCards";

import { useEffect, useState } from "react";

function Series(){

    const [movie, setMovie] = useState([]);

     useEffect(()=>{
        fetchmovieNew();
     },[])

     const fetchmovieNew = async () =>{
        const response = await fetch(
            "https://api.themoviedb.org/3/tv/popular?api_key=e6ab84494747e236db14b7345eded3f3"
        )

        const data = await response.json()
        setMovie(data.results)
        console.log(data)
     }


    return(
        <>
        <p id="sectionheading5">Popular Series</p>
        <div id="SeriesContainer">
             {movie.slice(0,10).map((movie)=>(<SeriesCards key={movie.id} movie={movie}/>))}
        </div>
        </>
    )
}

export default Series;