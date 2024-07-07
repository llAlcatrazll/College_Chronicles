// import temp from "../../assets/temp.png";
// import News from "../sub_components/News.jsx";
import "../../App.css";
import "@fontsource/cormorant-garamond"; // Importing the font using fontsource
import "../../special_css/mainbg.css";
import Body_Hero from "../sub_components/Body_Hero";

import "@fontsource/luckiest-guy";
// import Landing_image_change from "../nuance_objects/Landing_image_change";
// import Landing_text from "../nuance_objects/Landing_text";

function Body() {
  return (
    <div className="main_bg text-dark h-100vh d-flex justify-content-center align-items-center flex-column">
      <div className="bg-danger" style={{ width: "84%" }}>
        <Body_Hero />

        <div className="h-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus
          soluta voluptate a facilis dolore cupiditate aliquid? Eos amet
          excepturi voluptas magnam atque quibusdam sed enim odio voluptatibus,
          vitae assumenda itaque sit totam quae cumque nesciunt nam laboriosam,
          facere neque rerum nemo voluptatum veritatis obcaecati! Repellat
          beatae pariatur porro praesentium, ad inventore vitae! Nesciunt
          numquam quibusdam harum commodi optio, molestiae excepturi itaque.
          Odit officiis sunt sed cum nihil aspernatur eum voluptatum voluptate
          autem totam delectus, tempora ratione omnis rerum fugiat quis fugit.
          Sapiente expedita eius quas optio iure facilis perferendis
          praesentium, dolorem aut animi iste placeat nihil molestias minus
          reiciendis voluptas eum tempora sit fugit ducimus, vel aliquam? Ullam
          blanditiis molestias maxime, sequi facilis sed eligendi aliquam dicta
          culpa iste eum rem distinctio!
        </div>
      </div>
    </div>
  );
}

export default Body;
