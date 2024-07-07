function HeaderAds() {
  return (
    <div
      className="w-100 text-sm tracking-widest p-1 py-2 d-flex justify-center text-white border-b-2"
      style={{
        backgroundColor: "#3c3c3c",
        borderBlockColor: "#47A8D1",
        fontFamily: "roboto, sans-serif",
      }}
    >
      <div className="d-flex justify-between" style={{ width: "69%" }}>
        <div style={{ letterSpacing: "4px" }}>
          COLLEGE OF COMPUTING AND INFORMATION SCIENCES
        </div>
        <div className="d-flex justify-between " style={{ width: "20%" }}>
          <div className="d-flex font-bold">
            <div>WE ARE A&nbsp;</div>
            <div className="d-flex">
              <div style={{ color: "#47A8D1" }}>FAM</div>
              <div>ILY</div>
            </div>
          </div>
          <div
            className="text-dark font-bold px-3 rounded"
            style={{ backgroundColor: "#47A8D1" }}
          >
            Visit
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAds;
