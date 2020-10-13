import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {placesFound} = props;

  return <React.Fragment>
    <Main placesFound={placesFound}
    />
  </React.Fragment>;
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
};

export default App;
