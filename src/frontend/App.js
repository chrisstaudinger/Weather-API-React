import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null
    }

    const getCoords = async () => {
      const coordinates = await window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('setting coords')
          this.setState( {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          } )
        }, (error) => {
          console.log('setting error')
          this.setState( { locationErr: error.message } )
        }
      );
    }
    getCoords()

  }

  // state = {
  //   latitude: null,
  //   longitude: null
  // }

  componentDidMount() {
    
    console.log("In Mount ✅")
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log('setting coords')
  //       this.setState( {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       } )
  //     }, (error) => {
  //       console.log('setting error')
  //       this.setState( { locationErr: error.message } )
  //     }
  //   );

    // const options = {
    //   headers: {
    //     'latitude': this.state.latitude,
    //     'longitude': this.state.longitude
    //   }
    // };
    // console.log(options)

    // const getWeatherData = async () => {
    //   const response = await axios.get('http://localhost:5000/', options)
    //   console.log(response)
    //   // this.setState( { apiData: response } )
    // }
    // getWeatherData()

  }

  componentDidUpdate() {

    const options = {
      headers: {
        'latitude': this.state.latitude,
        'longitude': this.state.longitude
      }
    };
    console.log(options)

    const getWeatherData = async () => {
      const response = await axios.get('http://localhost:5000/', options)
      console.log(response)
      // this.setState( { apiData: response } )
    }
    getWeatherData()

  }

  render() {

    console.log("logging from Render")
    const { latitude, longitude, apiData } = this.state;
    console.log(this.state.latitude, this.state.longitude)

    return (
      <>
        <h1>{latitude} {longitude}</h1>
        <Weather apiData={apiData} latitude={latitude} longitude={longitude} />
        {/* <img src={logo} alt="logo"/> */}
      </>
    )
  }

}

export default App;
