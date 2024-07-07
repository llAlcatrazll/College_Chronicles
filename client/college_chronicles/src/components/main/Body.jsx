// import temp from "../../assets/temp.png";
// import News from "../sub_components/News.jsx";
import "../../App.css";
import "@fontsource/cormorant-garamond"; // Importing the font using fontsource
import "../../special_css/mainbg.css";
import Body_Hero from "../sub_components/Body_Hero";
import Context_Navigation from "../sub_components/Context_Navigation";
import "@fontsource/luckiest-guy";
// import Landing_image_change from "../nuance_objects/Landing_image_change";
// import Landing_text from "../nuance_objects/Landing_text";

function Body() {
  return (
    <div className="main_bg text-dark h-100vh d-flex justify-content-center align-items-center flex-column">
      <div className="" style={{ width: "84%" }}>
        <Body_Hero />
        <Context_Navigation />
      </div>
    </div>
  );
}

export default Body;
