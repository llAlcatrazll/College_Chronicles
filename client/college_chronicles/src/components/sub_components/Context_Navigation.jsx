import "../../special_css/mainbg.css";
function Context_Navigation() {
  return (
    <div
      className="d-flex justify-content-center justify-around align-items-center background_navigation"
      style={{ height: "9vh" }}
    >
      <button
        className="px-5 mx-3 text-white rounded-full font-semibold mt-2 border-1 border-cyan-400"
        style={{
          backgroundColor: "#111",
          height: "55%",
          width: "auto",
        }}
      >
        College History
      </button>
      <button
        className="px-5 mx-3 text-white rounded-full font-semibold mt-2 border-1 border-cyan-400"
        style={{
          backgroundColor: "#111",
          height: "55%",
          width: "auto",
        }}
      >
        Association of Computer Studies Students
      </button>
      <button
        className="px-5 mx-3 text-white rounded-full font-semibold mt-2 border-1 border-cyan-400"
        style={{
          backgroundColor: "#111",
          height: "55%",
          width: "auto",
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default Context_Navigation;
