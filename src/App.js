import React from 'react';

import ConditionalRendering from './ConditionalRendering';
import Forms from './Forms';
import LiftedState from './LiftedState';
import ParentElement from './DoubleCheckTwoSideConnection';
// REDUX
import { connect } from 'react-redux';
import actionOne from './Redux/Actions';

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    actionOne: () => dispatch(actionOne())
});

class MixAllElements extends React.Component {
    simpleAction = (event) => {
        this.props.actionOne();
    }
    render() {
        return (
            <div>
                <Fluff quallity="Big" />
                <Fluff quallity="Awesome" />
                <Fluff quallity="Fluffy" />
                <Clock />
                <a href="www.google.com" onClick={click}>
                    Link prevent default
                </a>
                <ConditionalRendering />
                <Forms />
                <LiftedState />
                <ParentElement />
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>{JSON.stringify(this.props)}</pre>
            </div>
        )
    }
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
        this.state = { time: new Date().toLocaleTimeString() }
    }
    componentDidMount() {
        this.clearMemory = setInterval(() => this.tick(), 1000);
    };
    componentWillMount() {
        clearInterval(this.clearMemory);
    };
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    };

    render() {
        return (
            <div>
                <h2>It is {this.state.time}</h2>
            </div>
        )
    };
}

//  Events
function click(event) {
    event.preventDefault();
    return console.log('Click');
};

export default connect(mapStateToProps, mapDispatchToProps)(MixAllElements);
