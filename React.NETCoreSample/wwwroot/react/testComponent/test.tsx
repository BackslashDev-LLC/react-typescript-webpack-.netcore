import * as React from "react";

export class Props { }
export class State
{
    name:string
}

export default class TestComponent extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        this.state = { name: ""}
    }

    handleChange = (ev) => {
        this.setState({ name: ev.target.value });
    }

    render() {
        return (
            <div className="react-div">
                <input type="text" name="name" onChange={this.handleChange} />
                <p>Hello, {this.state.name}!</p>
            </div>
            );
    }
}