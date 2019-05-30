import React from 'react';

const measures = {
    c: "Celsius",
    f: "Farenheit"
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
};
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
};

class LiftedState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', variant: 'c'}
    }

    celsiusChange = (tempr) => {
        this.setState({temperature: tempr, variant: 'c'})
    }
    farenheitChange = (tempr) => {
        this.setState({temperature: tempr, variant: 'f'})
    }

    render() {
        const farenheitNum = this.state.variant === 'c' ? toFahrenheit(this.state.temperature) : this.state.temperature;
        const celsiusNum = this.state.variant === 'f' ? toCelsius(this.state.temperature) : this.state.temperature;
        return (
            <div>
                <Operation variant="c" temperature={celsiusNum} onDoublesideConnection={this.celsiusChange} />
                <Operation variant="f" temperature={farenheitNum} onDoublesideConnection={this.farenheitChange} />
                <Verdict result={celsiusNum} />
            </div>
        )
    }
};

class Operation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    inputTemp = (e) => {
        this.props.onDoublesideConnection(e.target.value)
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>
                        Input temperature in {measures[this.props.variant]}
                    <input
                            value={this.props.temperature}
                            onChange={this.inputTemp}
                        />
                    </legend>
                </fieldset>
            </div>
        );
    }
};

function Verdict(props) {
    if (props.result >= 100) {
        return <p>The water would boil.</p>;
    } 
    return <p>The water would not boil.</p>;
};

export default LiftedState;