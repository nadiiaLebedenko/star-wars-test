import React from 'react';
import loader from '../assets/lightsaber.svg';

function Loader() {
    return (
        <div className="App-overlay">
            <img src={loader} className="App-loader" alt="loader"/>
        </div>
    )
}

export default Loader;
