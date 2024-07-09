import "../../special_css/mainbg.css";

function Why_CCIS() {
  return (
    <div
      className="d-flex align-items-center background_video h-100vh text-white"
      style={{ height: "100vh" }}
    >
      {/* MAIN HORIZONTAL DIV */}
      <div
        className="h-75 w-100 d-flex border-b-2"
        style={{ borderBlockColor: "#47A8D1" }}
      >
        {/* SELECTION AREA */}

        <div className=" w-25 background_video_selection d-flex flex-col align-items-center position-relative justify-content-center">
          {/* QUESTION ARE */}
          <div className="d-flex">
            <p className="text-5xl ">Why &nbsp;</p>
            <p className="text-5xl font-extrabold" style={{ color: "#47A8D1" }}>
              CCIS
            </p>
            <p className="text-5xl font-semibold">?</p>
          </div>
          {/* BUTTON NAVIGATION AREA */}
          <div className="d-flex flex-col mt-4 hotlink_nav text-xl">
            <p className="text-underline hotlinks  max-w-fit">
              Constant Exploration
            </p>
            <p className="text-underline hotlinks  max-w-fit">
              Skill Specialization
            </p>
            <p className="text-underline hotlinks  max-w-fit">
              Career Ready Graduates
            </p>
            <p className="text-underline hotlinks  max-w-fit">
              Yearning for Innovaiton
            </p>
          </div>
        </div>
        {/* VIDEO AREA */}
        <div className="bg-info w-100">
          <iframe
            className="w-100 h-100"
            src="https://www.youtube.com/embed/_39Vv3DJUCw?autoplay=1&mute=1&loop=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Why_CCIS;
