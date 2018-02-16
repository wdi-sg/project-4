import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MapWithAMarker = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.places.lat(), lng: props.places.lng() }}
  >
    {props.allPlaces.map(({ place_id, formatted_address, name, geometry: { location } }) =>
      <Marker
        key={place_id}
        position={{ lat: location.lat(), lng: location.lng() }}
        onClick={props.onToggleOpen}>
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <h2>{name}</h2>
        </InfoWindow>}
      </Marker>
    )}
  </GoogleMap>
);

export default MapWithAMarker;
