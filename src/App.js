import React from 'react';
import './App.css';
import './index.css';
import Meteo from './components/Meteo';
import Quote from './components/Quote';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container" style={{marginLeft: 0, width: 0}}>
                    <div className="row">
                        <Meteo/>
                    </div>
                </div>
                <div className="container" style={{marginLeft: 0, width: 0}}>
                    <div className="row">
                        <Quote/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
