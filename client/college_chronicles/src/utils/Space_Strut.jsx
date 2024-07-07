import PropTypes from "prop-types";
// Creates autmatic spaces on pages though PIXELS
const Spacer = ({ height }) => {
  return <div style={{ height: `${height}px`, width: "100%" }}></div>;
};

Spacer.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Spacer;
