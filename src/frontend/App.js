import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  
  state = {
    latitude: null,
    longitude: null
  }

  componentDidMount() {
    
    console.log("In Mount ✅")
    window.navigator.geolocation.getCurrentPosition(
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
    }
    getWeatherData()

    console.log("This Logged from compoenentDidUpdate")
  }

  render() {

    const { latitude, longitude } = this.state;
    console.log(this.state.latitude, this.state.longitude)

    return (
      <>
        <h1>{latitude} {longitude}</h1>
        <img src={logo} alt="logo"/>
      </>
    )
  }

}

export default App;
