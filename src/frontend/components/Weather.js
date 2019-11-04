import React from 'react';
import axios from 'axios';

class Weather extends React.Component {

  componentDidMount() {

    // const options = {
    //   headers: {
    //     'latitude': this.props.latitude,
    //     'longitude': this.props.longitude
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
  

  render() {
    console.log(this.state)
    console.log(this.props)
    return(
      `Weather Component. Rendering Props. Latitude ${this.props.latitude} Longitude${this.props.latitude}`
    )
  }

}

export default Weather;