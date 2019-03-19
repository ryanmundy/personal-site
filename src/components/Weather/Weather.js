import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
const Skycons = require("skycons")(window);

class Weather extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    state = {
        origin: {
            lat: '',
            lng: ''
        },
        weather: {
            currentWeather: '-- ',
            currentDescription: '--',
            currentIcon: ''
        }
    }

    componentDidMount() {
        this.getGeoLocation();
    }

    getWeather = () => {
        axios({
            method: 'GET',
            url: `/forecast/?lat=${this.state.origin.lat}&lng=${this.state.origin.lng}`
        }).then((response) => {
            console.log(response)
            this.setState({
                ...this.state,
                weather: {
                    currentWeather: Math.round(response.data.currently.temperature),
                    currentDescription: response.data.currently.summary,
                    currentIcon: response.data.currently.icon
                }
            })
            const skycons = new Skycons({ color: "white" });
            let skycon = '';
            if (this.state.weather.currentIcon === 'clear-day') {
                skycon = Skycons.CLEAR_DAY
            }
            else if (this.state.weather.currentIcon === 'clear-night') {
                skycon = Skycons.CLEAR_NIGHT
            }
            else if (this.state.weather.currentIcon === 'partly-cloudy-day') {
                skycon = Skycons.PARTLY_CLOUDY_DAY
            }
            else if (this.state.weather.currentIcon === 'partly-cloudy-night') {
                skycon = Skycons.PARTLY_CLOUDY_NIGHT
            }
            else if (this.state.weather.currentIcon === 'cloudy') {
                skycon = Skycons.CLOUDY
            }
            else if (this.state.weather.currentIcon === 'rain') {
                skycon = Skycons.RAIN
            }
            else if (this.state.weather.currentIcon === 'SLEET') {
                skycon = Skycons.SLEET
            }
            else if (this.state.weather.currentIcon === 'snow') {
                skycon = Skycons.SNOW
            }
            else if (this.state.weather.currentIcon === 'wind') {
                skycon = Skycons.WIND
            }
            else if (this.state.weather.currentIcon === 'fog') {
                skycon = Skycons.FOG
            }
            skycons.add(this.ref.current, skycon);
            skycons.play();
        }).catch((error) => {
            console.log(error)
        });
    }

    // captures users current location 
    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
                    // sets origin coordinates latituude and longitude
                    this.setState({
                        ...this.state,
                        origin: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                    this.getWeather();

                }
            )
        } else {
            alert('Location services not supported by your browser');
        }
    }


    render() {
        return (
            <div id="weatherDiv">
                <a id="weather" target="_blank" href="https://darksky.net/poweredby/">
                    <p id="weather">Current Weather:</p>
                    <canvas ref={this.ref} width="15" height="15" />
                    <p id="weather">{this.state.weather.currentWeather}° F , {this.state.weather.currentDescription}</p>
                </a>
                <a id="weather" target="_blank" href="https://darksky.net/poweredby/"><p style={{ fontSize: "10px" }}><em>Powered by Dark Sky</em></p></a>
            </div>
        )
    }
}

export default connect()(Weather);
