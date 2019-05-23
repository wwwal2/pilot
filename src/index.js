import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MixAllElements() {
    return (
    <div>
        <Fluff quallity="Big" />
        <Fluff quallity="Awesome" />
        <Fluff quallity="Fluffy" />
    </div>
    )
};

function Fluff(props) {
    return (
        <h1>Fluffers is {props.quallity}</h1>
    )
};

ReactDOM.render(<MixAllElements />, document.getElementById('root'));

serviceWorker.unregister();
