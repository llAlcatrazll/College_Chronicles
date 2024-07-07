import HeaderAds from "../micro_objects/HeaderAds.jsx";
import College_Logo from "../../assets/logos/CCIS_Logo.png";
function Header() {
  return (
    <div>
      <HeaderAds />
      <div
        className=" text-white 
      align-content-center p-1  w-100 justify-content-center d-flex px-2"
        style={{ height: "70px", backgroundColor: "#2a2a2a" }}
      >
        {/* LEFT SIDE WRAPPER */}
        <div style={{ width: "84%" }} className=" px-3 d-flex justify-between ">
          {/* LOGO AND COLLEGE TEXT */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "45%" }}
          >
            <img style={{ height: "100%" }} src={College_Logo} alt="" />
            <p className="font-bold text-7xl pt-1" style={{ color: "#47A8D1" }}>
              CCIS
            </p>
            {/* SELECTION MENU */}
            <div className="px-3 w-100 h-100 align-items-center d-flex justify-between font-bold">
              <div>MENU</div>
              <div>PROGRAMS</div>
              <div>ADMISSIONS</div>
              <div>WHY CCIS?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
