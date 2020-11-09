import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';


class MainMap extends PureComponent {

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const offersCoords = this.props.coords;

    offersCoords.forEach(function (offer) {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(map);
    });
  }

  render() {

    return (
      <div id="map" style={{height: 100 + `%`}}></div>
    );
  }
}

MainMap.propTypes = {
  coords: PropTypes.array.isRequired
};

export default MainMap;
