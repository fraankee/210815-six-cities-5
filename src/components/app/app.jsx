import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {placesFound} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesFound={placesFound} />
        </Route>
      </Switch>
      <Switch >
        <Route exact path="/login">
          <SignIn />
        </Route>
      </Switch>
      <Switch >
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
      <Switch >
        <Route exact path="/offer/:id">
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
};

export default App;
