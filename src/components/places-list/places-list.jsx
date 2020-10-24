import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: ``,
    };
  }

  render() {

    const {offers} = this.props;

    return (
      offers.map((offer) => (
        <PlaceCard
          key = {offer.id}
          offer = {offer}
          onHover = {() => {
            this.setState({
              activeOffer: offer.id,
            });
          }}
        />
      ))
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
