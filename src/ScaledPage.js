import React, { Component } from "react";
import { Main } from "./Main";

class ScaledPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenSizeFits:
                window.matchMedia("(min-width: 600px)").matches ||
                window.matchMedia("(min-height: 400px)").matches,
        };
    }

    componentDidMount() {
        const adjustScreenSize = (e) =>
            this.setState({ screenSizeFits: e.matches });
        window
            .matchMedia("(min-width: 600px)")
            .addEventListener("change", adjustScreenSize);
    }
    render() {
        return (
            <div>
                {this.state.screenSizeFits && <Main isLaptop={true} />}
                {!this.state.screenSizeFits && <Main isLaptop={false} />}
            </div>
        );
    }
}

export default ScaledPage;
