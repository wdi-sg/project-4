import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import MapWithAMarker from './Map';
import { Button } from 'reactstrap';

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};
      // set the default focus of the map
      const places = { lat: () => 1.352083 , lng: () => 103.819836};

      this.setState({
        places,
        allPlaces: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          // target the input to clear after location is selected
          var searchBox = document.getElementById("searchBox");
          searchBox.value = "";
          const places = refs.searchBox.getPlaces();
          console.log(places);
          this.setState({
            // 1. set state for the current location,
            // 2. concat all places. if just want to show single marker can remove allPlaces
            places: places[0].geometry.location,
            allPlaces: this.state.allPlaces.concat(places)
          });
        }
      })
    }
  }),
  withScriptjs
)(props => {
  console.log(props)
  return (
    <div data-standalone-searchbox="">
      <StandaloneSearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          id="searchBox"
          type="text"
          placeholder="Search for Locations!"
          style={{
            boxSizing: `border-box`,
            border: `none`,
            width: `100%`,
            height: `40px`,
            padding: `0 12px`,
            fontSize: `18px`,
            textOverflow: `ellipses`
          }}
        />
      </StandaloneSearchBox>
      {/* <Button color="primary" onClick={() => props.onAdd(props.allPlaces[props.allPlaces.length - 1])}>Add Searched Location to List</Button> */}

      <MapWithAMarker places={props.places} allPlaces={props.allPlaces} onAdd={props.onAdd}/>
    </div>
  )
});

export default PlacesWithStandaloneSearchBox;
