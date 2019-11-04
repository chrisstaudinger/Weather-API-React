import React from 'react';
import axios from 'axios';

class Weather extends React.Component {

  state = {
    apiData: null
  }

  componentDidMount() {
    
    console.log("In Update ✅")
    
    const getWeatherData = async () => {

      const options = {
        headers: {
          'latitude': this.props.latitude,
          'longitude': this.props.longitude
        }
      };

      const response = await axios.get('http://localhost:5000/', options)
      console.log(response)
      this.setState( { apiData: response } )
    }

    if ( this.props.latitude && this.props.longitude) {
      console.log('SETITNG INTERVAL')
      setInterval( () => {
        getWeatherData()
      }, (3600 * 1000))
    }

  }
  

  render() {
    console.log('IN WEATHER COMPONENT', this.props, this.state.apiData)
    return(
      `Weather Component. Rendering Props. Latitude ${this.props.latitude} Longitude${this.props.latitude}`
    )
  }

}

export default Weather;