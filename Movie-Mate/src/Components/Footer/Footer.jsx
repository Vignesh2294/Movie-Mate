import "./Footer.css";
import FooterButtons from "./FooterButtons/Footerbuttons";

function Footer({ setShowWishlist }) {
  return (
    <div id="Footer">
      <FooterButtons setShowWishlist={setShowWishlist} />
    </div>
  );
}

export default Footer;
