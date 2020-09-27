import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Manuel Alejandro</h2>
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
