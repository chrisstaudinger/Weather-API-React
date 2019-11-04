import React from 'react';
import './App.css';
import Weather from './components/Weather'

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
  }

  componentWillMount() {
    console.log("logging from componentWillMount")
    const getCoords = async () => {
      const coordinates = await window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('setting coords')
          if (this.state.latitude !== position.coords.latitude && this.state.longitude !== position.coords.longitude) {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
          }
        }, (error) => {
          console.log('setting error')
          this.setState( { locationErr: error.message } )
        }
      );
    }
    getCoords()
  }

  render() {
    const { latitude, longitude } = this.state;

    return (
      <>
        <h1>{latitude} {longitude}</h1>
        { latitude && longitude && <Weather latitude={latitude} longitude={longitude} />}
      </>
    )
  }

}

export default App;
