import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './App.css';
import { tokens } from './config/tokens';


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${tokens.GOOLE_API_TOKEN}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultZoom={15}
    
  >
    {
      props.isMarkerShown && 
      <Marker 
      position={{ lat: -34.397, lng: 150.644 }}
      />
    }
  </GoogleMap>
)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <MyMapComponent isMarkerShown />
          <RaisedButton label="Material UI" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
