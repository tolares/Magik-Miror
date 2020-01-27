import React, {Component} from 'react'
import Geocoder from 'react-native-geocoding';
import '../assets/Meteo.css';
import axios from 'axios';

class Meteo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
            sec: new Date().getSeconds().toLocaleString(),
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            latitude: null,
            longitude: null,
            city: null,
            temp: null,
            tempTomorrow: null,
            weatherTomorrow: null
        };

    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Nancy&APPID=4381adad99eedbb5457b33068c27d8c5')
            .then(res => {
                this.setState({temp: Number((res.data.main['temp'] - 273.15).toFixed(0))});
                console.log(res.main)
            });
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Paris&APPID=4381adad99eedbb5457b33068c27d8c5')
            .then(res => {
                this.setState({
                    tempTomorrow: Number((res.data.list[5].main['temp'] - 273.15).toFixed(0)),
                    weatherTomorrow: res.data.list[5].weather[0].main
                });
            });
        if(this.state.weatherTomorrow == 'Rain'){
            this.setState({
                weatherTomorrow: 'tint'
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
            sec: new Date().getSeconds().toLocaleString(),
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        });
    }

    render() {
        return (

            <div className="col">
                <div className="weather-card one">
                    <div className="top">
                        <div className="wrapper">
                            <div className="mynav">
                            </div>
                            <h1 className="heading">{this.state.day + '/'+this.state.month+ '/'+this.state.year+ '  '+this.state.hours + ':' + this.state.minutes + ':' + this.state.sec}</h1>
                            <h3 className="location">Nancy, France</h3>
                            <p className="temp">
                                <span className="temp-value">{this.state.temp}</span>
                                <span className="deg">0</span>
                                <a ><span className="temp-type">C</span></a>
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="wrapper">
                            <ul className="forecast">
                                <a href="javascript:;"><span className="lnr lnr-chevron-up go-up"></span></a>
                                <li className="active">
                                    <span className="date">Tomorrow</span>
                                    <span className="fa fa-tint condition">
									    <span className="temp">{this.state.tempTomorrow}<span className="deg">0</span>
                                        <span className="temp-type">C</span>
									</span>
								</span>
                                </li>
                                <li>
                                    <span className="date">Tomorrow</span>
                                    <span className="fa fa-cloud condition">
									<span className="temp">21<span className="deg">0</span><span
                                        className="temp-type">C</span></span>
								</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meteo;
