import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }
    }

    inputText = (e) => {
        this.setState({value: e.target.value})
    }
    submit = (e) => {
        e.preventDefault();
        alert("You typed " + this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    Input:
                    <input type="text" value={this.state.value} onChange={this.inputText}/>
                    <input type="submit"/>
                </label>
            </form>
        )
    };     
};

export default Forms