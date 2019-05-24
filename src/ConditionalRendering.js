import React from 'react';

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstPosition: true }
    }

    posOne = () => {
        this.setState({ firstPosition: false});
    };
    posTwo = () => {
        this.setState({ firstPosition: true});
    };

    render() {
        const btnOne = <button onClick={this.posOne}> Position one</button>;
        const btnTwo = <button onClick={this.posTwo}>Position two</button>

        return (
            <div>
                <h2>the button is</h2>
                {this.state.firstPosition ? btnOne : btnTwo}
            </div>
        )
    };     
};

export default ConditionalRendering