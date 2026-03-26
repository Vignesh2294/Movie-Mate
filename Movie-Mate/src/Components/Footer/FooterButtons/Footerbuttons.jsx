import "./FooterButtons.css";

function FooterButtons({ setShowWishlist }) { 

    function gotop(){
        document.getElementById("Header")?.scrollIntoView({ behavior: "smooth" });
    }

    return(
        <>
        <button className="FooterButtons" onClick={gotop}>
            ⬆ Go Top
        </button>

        <button 
            className="FooterButtons" 
            onClick={() => setShowWishlist(true)} 
        >
            ❤ WishList
        </button>

        <button className="FooterButtons">
            👤 Profile
        </button>
        </>
    )
}

export default FooterButtons;
