import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {placesFound, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesFound={placesFound} offers={offers} />
        </Route>
      </Switch>
      <Switch >
        <Route exact path="/login">
          <SignIn />
        </Route>
      </Switch>
      <Switch >
        <Route exact path="/favorites">
          <Favorites
            offers={offers.filter((offer) => offer.bookmark)}
          />
        </Route>
      </Switch>
      <Switch >
        <Route exact path="/offer/:id"
          render={({match}) => (
            <Room
              offer={offers.find((offer) => offer.id === match.params.id)}
              offers={offers}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
  offer: PropTypes.object,
  offers: PropTypes.array.isRequired,
};

export default App;
