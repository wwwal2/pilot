import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MixAllElements from './App';
import * as serviceWorker from './serviceWorker';
// REDUX
import { Provider } from 'react-redux'
import configureStore from './Redux/Store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <MixAllElements />
    </Provider>, document.getElementById('root')
    );

serviceWorker.unregister();
