import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Searchbar from "./Components/Seacrbar/Searchbar";
import NewMovies from "./Components/Section1/NewlyReleasedMovies";
import Logo from "./Components/Logo/logo";
import TopMovies from "./Components/Section2/TopMovies";
import UpcomingMovies from "./Components/Section3/UpcomingMovies";
import PopularMovies from "./Components/Section4/PopularMovies";
import Series from "./Components/Section5/Series";
import WishList from "./Components/WishList/WishList";

function App(){

    const [showWishlist, setShowWishlist] = useState(false);

    return(
        <>
        <Logo/>
        <Header/>
        <Searchbar/>
        <NewMovies/>
        <TopMovies/>
        <UpcomingMovies/>
        <PopularMovies/>
        <Series/>

        <Footer setShowWishlist={setShowWishlist}/> {}

        {showWishlist && (
            <WishList setShowWishlist={setShowWishlist}/>
        )}
        </>
    )
}

export default App;
