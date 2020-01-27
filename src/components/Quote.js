import React, { Component } from 'react'
import '../assets/Meteo.css';
import axios from "axios";

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: null,
            author: null,
            background: null
        };

    }

    componentDidMount() {
        axios.get('http://quotes.rest/qod.json')
            .then(res => {
                this.setState({
                    quote: res.data.contents.quotes[0].quote,
                    author: res.data.contents.quotes[0].author,
                    background: "url(" + res.data.contents.quotes[0].background + ")",
                });
            });
    }
    render() {

        return (
                    <div className="col">
                        <div className="weather-card" style={{height: 570}}>
                            <div className="top" style={{backgroundImage: this.state.background}}>
                                <div className="wrapper">
                                    <h1 className="heading">{this.state.quote}</h1>
                                    <h3 className="location">{this.state.author}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Quote;
