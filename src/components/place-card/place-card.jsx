import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class PlaceCard extends PureComponent {

  constructor(props) {
    super(props);
  }
  render() {
    const {offer, onHover} = this.props;
    return (
      <article key={offer.title} className="cities__place-card place-card" onMouseOver={onHover}>
        {offer.mark.length > 0 &&
          <div className="place-card__mark">
            <span>{offer.mark}</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href={`/offer/` + offer.id}>
            <img className="place-card__image" src={offer.photos[0]} width="260" height="200" alt={offer.title}/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ` + (offer.bookmark ? `place-card__bookmark-button--active` : ``)} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: (offer.rating * 20) + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href={`/offer/` + offer.id}>{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.features.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    mark: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    coords: PropTypes.array.isRequired,
    bookmark: PropTypes.bool.isRequired,
    features: PropTypes.shape({
      type: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired
    }).isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      pro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired,
  onHover: PropTypes.func
};

export default PlaceCard;
