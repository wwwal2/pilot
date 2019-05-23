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
        <Clock />
    </div>
    )
};

function Fluff(props) {
    return (
        <h1>Fluffers is {props.quallity}</h1>
    )
};

// State and LifeCycles
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date().toLocaleTimeString()}
    }
    componentDidMount() {
        this.clearMemory = setInterval(() => this.tick(), 1000);
    };
    componentWillMount() {
        clearInterval(this.clearMemory);
    };

    tick(){
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    };

    render() {
        return (
        <h2>It is {this.state.time}</h2>
        )
    };     
}

ReactDOM.render(<MixAllElements />, document.getElementById('root'));

serviceWorker.unregister();
