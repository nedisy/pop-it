import React, { Component } from "react";

class EnterPlayerNameScene extends Component {
    state = {
        firstPlayerNameWarning: "",
        secondPlayerNameWarning: "",
    };

    handleSubmit = (e) => {
        let firstPlayerName = this.props.firstPlayerName;
        let secondPlayerName = this.props.secondPlayerName;
        e.preventDefault();
        if (firstPlayerName === "" || secondPlayerName === "") {
            if (firstPlayerName === "") {
                this.setState({
                    firstPlayerNameWarning: "Please enter first player name",
                });
            }
            if (secondPlayerName === "") {
                this.setState({
                    secondPlayerNameWarning: "Please enter second player name",
                });
            }
            return;
        }
        if (firstPlayerName === secondPlayerName) {
            this.setState({
                firstPlayerNameWarning: "",
                secondPlayerNameWarning: "Players' name cannot be the same",
            });
            return;
        }
        this.setState({
            firstPlayerNameWarning: "",
            secondPlayerNameWarning: "",
        });
        this.props.onSuccessfulSubmit();
    };

    render() {
        if (this.props.activeScene !== "EnterPlayerName") return "";

        return (
            <div className="container-sm position-absolute top-50 start-50 translate-middle">
                <p className="h1 mb-3 text-light">Enter Players' Name</p>
                <form
                    onSubmit={this.handleSubmit}
                    className="text-start text-light"
                >
                    <div className="mb-3 text-start">
                        <label className="form-label">First Player Name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="firstPlayerName"
                            value={this.props.firstPlayerName}
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="Enter First Player Name"
                        ></input>
                    </div>
                    <div className="mb-3 form-text text-warning">
                        {this.state.firstPlayerNameWarning}
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Second Player Name</label>
                        <input
                            className="mb-3 form-control"
                            type="text"
                            id="secondPlayerName"
                            value={this.props.secondPlayerName}
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="Enter Second Player Name"
                        ></input>
                    </div>
                    <div className="mb-3 form-text text-warning">
                        {this.state.secondPlayerNameWarning}
                    </div>
                    <input
                        type="submit"
                        className="mb-3 btn btn-outline-light"
                        value="Play"
                    />
                </form>
            </div>
        );
    }
}

export default EnterPlayerNameScene;
