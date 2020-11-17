import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import PlacesList from "../places-list/places-list";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";
import MainMap from "../main-map/main-map";

class Room extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, offers} = this.props;
    const nearPlaces = [];
    const nearPlacesCount = 3;

    offers.filter(((offerItem) => offerItem.address === offer.address && offerItem.id !== offer.id)).forEach((offerItem, i) => {
      if (i < nearPlacesCount) {
        nearPlaces.push(offerItem);
      }
    });

    const cityCoords = nearPlaces.map((nearPlace) => {
      return {
        coords: nearPlace.coords,
        city: nearPlace.address
      };
    });

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.map((photo) => (
                  <div key={photo} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.mark.length > 0 &&
                <div className="property__mark">
                  <span>{offer.mark}</span>
                </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.title}</h1>
                  <button
                    className={offer.bookmark ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`}
                    type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: (offer.rating * 100 / 5) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.features.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.features.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.features.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.inside.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={offer.host.pro ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {offer.description.map((item) => (
                      <p key={item} className="property__text">{item}</p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList reviews={offer.reviews}>
                    <h2 className="reviews__title">Reviews &middot; <span
                      className="reviews__amount">{offer.reviews.length}</span></h2>
                  </ReviewsList>
                  <ReviewForm/>
                </section>
              </div>
            </div>
            {nearPlaces.length > 0 &&
              <section className="property__map map">
                <MainMap coords={cityCoords}/>
              </section>
            }
          </section>
          {nearPlaces.length > 0 &&
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <PlacesList offers={nearPlaces}/>
                </div>
              </section>
            </div>
          }
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  offer: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired
};

export default Room;
