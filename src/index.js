import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = <Fluff quallity="awesome" />

function Fluff(props) {
    return (
        <h1>Fluffers {props.quallity}</h1>
    )
};

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
