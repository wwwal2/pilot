import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "", fruits: "Grapefruit" }
    }

    submit = (e) => {
        e.preventDefault();
        alert("You typed " + this.state.input + " and you have chosen " + this.state.fruits)
    }

    // inputText = (e) => {
    //     this.setState({input: e.target.value})
    // }
    // fruitChoose = (e) => {
    //     this.setState({fruits: e.target.value})        
    // }

    destrAssignFunc = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    Input:
                    <input name="input" type="text" value={this.state.input} onChange={this.destrAssignFunc} />
                    <input type="submit" />
                </label>
                <label>
                    Pick your favorite flavor:
                    <select name="fruits" value={this.state.value} onChange={this.destrAssignFunc}>
                        <option value="Grapefruit">Grapefruit</option>
                        <option value="Lime">Lime</option>
                        <option value="Coconut">Coconut</option>
                        <option value="Mango">Mango</option>
                    </select>
                </label>
            </form>
        )
    };     
};

export default Forms

// !Object is an associative array
// let chinch = {
//     a: "gready",
//     b: "awesome"
// }
// console.log(chinch["a"]);
// console.log(chinch.b);
