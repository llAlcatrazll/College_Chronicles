import Header from "../components/main/Header";
// import Footer from "../components/main/Footer";
import Body from "../components/main/Body";
import "../special_css/mainbg.css";
// import Spacer from "../../src/utils/Space_Strut";
// import Pattern_Background from "../assets/backgrounds/bg.png";
function LandingPage() {
  return (
    <>
      <div className="h-auto background_svg d-flex justify-content-center flex-col flex-grow-1  ">
        {/* <Footer className="z-3" /> */}
        {/* <div className="d-flex justify-between h-100vh w-100 flex-grow-1  position-absolute position-fixed"> */}
        {/* <img src={Pattern_Background} /> */}
        {/* <img src={Pattern_Background} /> */}
        {/* </div> */}
        <Header />
        <Body />
      </div>
    </>
  );
}

export default LandingPage;
