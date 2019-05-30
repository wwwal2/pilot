import React from 'react';

class ParentElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: "Say \'ONE\'"}
    }

    doubleConnectionFunction = (e) => {
        this.setState({message: e})
    }

    render() {
        return (
            <div>
                <ChildElement message={this.state.message} connection={this.doubleConnectionFunction} />
            </div>
        )
    }
};

class ChildElement extends React.Component {
    rewriteMessage = () => {
        if (this.props.message === "Say \'ONE\'") this.props.connection("Say \'TWO\'")
    }

    render() {
        return (
            <div>
                {this.rewriteMessage()}
                {this.props.message}
            </div>
        )
    }
};

export default ParentElement