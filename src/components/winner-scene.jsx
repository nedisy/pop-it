import React, { Component } from "react";

class WinnerScene extends Component {
    render() {
        if (this.props.activeScene !== "WinnerScene") return "";

        return (
            <div className="container-fluid h-100 w-100 bg-green position-absolute text-light">
                <div className="container position-absolute top-50 start-50 translate-middle">
                    <h1>🎉 Congratulation! 🎉</h1>
                    <h1>{"🎊  " + this.props.winner + "  🎉"}</h1>
                    <h1>🥳 you won! 🥳</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-2 col-sm-3 col-12">
                            <button
                                className="btn btn-outline-light mt-4"
                                onClick={this.props.onRematch}
                            >
                                REMATCH!
                            </button>
                        </div>
                        <div className="col-md-2 col-sm-3 col-12">
                            <button
                                className="btn btn-outline-light mt-4"
                                onClick={this.props.onRename}
                            >
                                Rename
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WinnerScene;
