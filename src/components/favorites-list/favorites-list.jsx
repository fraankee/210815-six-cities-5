import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class FavoritesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: ``,
    };
  }

  render() {
    const {offers, city, id} = this.props;

    return (
      offers.filter(((offer) => offer.address === city && offer.id !== id)).map((offer) => (
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

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default FavoritesList;
