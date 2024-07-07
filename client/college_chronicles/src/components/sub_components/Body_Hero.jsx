import Hero_Image from "../../assets/backgrounds/IT_Week.jpg";
function Body_Hero() {
  return (
    <>
      {/* HERO IMAGE WRAPPER */}
      <div className=" text-white position-relative d-flex justify-content-center align-items-center">
        {/* INVITATION BOX */}
        <div className="d-flex justify-content-center align-items-end position-relative w-100">
          <div
            className="position-absolute mb-3 w-50 h-25 px-4 rounded"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex flex-column justify-content-center">
              <div
                className="d-flex justify-content-center"
                style={{
                  fontFamily: "Luckiest Guy",
                  color: "#47A8D1",
                  fontSize: "5rem",
                  marginTop: "-15px",
                }}
              >
                COME AND JOIN US!
              </div>
              <div
                className="text-2xl mx-4 font-bold"
                style={{ marginTop: "-17px" }} // Adjust this value to reduce space
              >
                Come and enroll in the College of Computing and Information
                Sciences Departments to have an experience unlike any other
              </div>
              <div className=" d-flex justify-content-center">
                {" "}
                {/* CALL TO ACTION BUTTON */}
                <button
                  className=" w-25 text-white rounded-full font-bold mt-2 border-1 border-cyan-400"
                  style={{
                    backgroundColor: "black",
                    height: "40px",
                  }}
                >
                  Take a Look
                </button>
              </div>
            </div>
          </div>
          <img src={Hero_Image} />
        </div>
        {/* END OF INVITATION BOX */}
      </div>
    </>
  );
}

export default Body_Hero;
