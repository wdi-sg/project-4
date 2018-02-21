import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { Button } from 'reactstrap';

const MapWithAMarker = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
    isOpen: true
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  console.log(props)
  let search = false
  if (props.allPlaces.length > 0) {
    search = true
  }
  let length = props.allPlaces.length
  return (
    <GoogleMap
      defaultZoom={14}
      center={{ lat: props.places.lat(), lng: props.places.lng() }}
    >
      {
        search &&
        (<Marker
          position={{ lat: props.places.lat(), lng: props.places.lng() }}
          onClick={props.onToggleOpen}>
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <h2>{props.allPlaces[length - 1].name}</h2>
              <Button color="primary">Add</Button>
            </div>
          </InfoWindow>}
        </Marker>)
      }
    </GoogleMap>
  )
});

export default MapWithAMarker;
