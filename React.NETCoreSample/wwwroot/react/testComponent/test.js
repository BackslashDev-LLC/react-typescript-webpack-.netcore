"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class Props {
}
exports.Props = Props;
class State {
}
exports.State = State;
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (ev) => {
            this.setState({ name: ev.target.value });
        };
        this.state = { name: "" };
    }
    render() {
        return (React.createElement("div", { className: "react-div" },
            React.createElement("input", { type: "text", name: "name", onChange: this.handleChange }),
            React.createElement("p", null,
                "Hello, ",
                this.state.name,
                "!")));
    }
}
exports.default = TestComponent;
