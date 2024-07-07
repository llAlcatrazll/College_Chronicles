import PropTypes from "prop-types";
// Creates autmatic spaces on pages though PIXELS
const Spacer = ({ width }) => {
  return <div style={{ width: `${width}px`, height: "1px" }}></div>;
};

Spacer.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Spacer;
