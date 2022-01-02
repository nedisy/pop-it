import React, { Component } from "react";
import pop1 from "./sounds/pop1.mp3";

class GameScene extends Component {
    state = {
        boardState: [...Array(6)].map((x) => Array(6).fill(true)),
        playerTurn: 0,
        selectedRow: null,
    };

    getBoardColor(rowIndex) {
        let boardColor = ["red", "orange", "yellow", "green", "blue", "purple"];
        return boardColor[rowIndex];
    }

    getRowHighlight(rowIndex) {
        if (this.state.selectedRow === rowIndex) return "light-";
        return "";
    }

    getBoardBorder(index) {
        if (index === "00") return "rounded-top-left-1";
        if (index === "05") return "rounded-top-right-1";
        if (index === "50") return "rounded-bottom-left-1";
        if (index === "55") return "rounded-bottom-right-1";
        return "";
    }

    getDisableState(row, col) {
        if (this.state.selectedRow !== null && this.state.selectedRow !== row) {
            return false;
        }
        return this.state.boardState[row][col];
    }

    getTurnBgVisibility(player, playerTurn) {
        if (player === playerTurn) return "inline";
        return "none";
    }

    getTurnBtnVisibility(player, playerTurn) {
        if (this.state.selectedRow == null) return "none";
        if (player === playerTurn) return "inline";
        return "none";
    }

    getBoardBorderSizeAndPosition(row, col) {
        let index = String(row) + col;
        if (index === "00") {
            return "w-95 h-90 top-50 end-0 translate-middle-y";
        }
        if (index === "05") {
            return "w-95 h-90 top-50 start-0 translate-middle-y";
        }
        if (index === "50") {
            return "w-95 h-90 top-50 end-0 translate-middle-y";
        }
        if (index === "55") {
            return "w-95 h-90 top-50 start-0 translate-middle-y";
        }
        if (col === 0) return "w-95 h-90 top-50 end-0 translate-middle-y";
        if (col === 5) return "w-95 h-90 top-50 start-0 translate-middle-y";
        return "w-100 h-90 top-50 start-50 translate-middle";
    }

    pop(row, col) {
        const popSound = new Audio(pop1);
        popSound.play();

        if (this.state.selectedRow == null) {
            this.setState({ selectedRow: row });
        }
        let newBoardState = this.state.boardState.slice();
        newBoardState[row][col] = false;
        this.setState({ boardState: newBoardState });
    }

    turn = () => {
        if (this.state.playerTurn === 0) {
            this.setState({ playerTurn: 1 });
        }
        if (this.state.playerTurn === 1) {
            this.setState({ playerTurn: 0 });
        }
        this.setState({ selectedRow: null });
    };

    handleChange = () => {
        let remainingPop = 0;
        let players = [this.props.firstPlayerName, this.props.secondPlayerName];
        for (let row of this.state.boardState) {
            for (let col of row) {
                remainingPop += 1 && col;
            }
        }

        if (remainingPop === 0) {
            this.setState({
                boardState: [...Array(6)].map((x) => Array(6).fill(true)),
                playerTurn: 0,
                selectedRow: null,
            });
            this.props.onGameEnded(players[1 - this.state.playerTurn]);
        }
    };

    render() {
        if (this.props.activeScene !== "GameScene") return "";
        return (
            <div>
                <div
                    className={
                        "container-fluid h-50 position-absolute top-0 start-0 bg-secondary d-" +
                        this.getTurnBgVisibility(0, this.state.playerTurn)
                    }
                ></div>
                <div
                    className={
                        "container-fluid h-50 position-absolute top-50 start-0 bg-secondary d-" +
                        this.getTurnBgVisibility(1, this.state.playerTurn)
                    }
                ></div>
                <button
                    className={
                        "btn btn-outline-light position-absolute top-0 start-50 mt-4 translate-middle-x d-" +
                        this.getTurnBtnVisibility(0, this.state.playerTurn)
                    }
                    onClick={this.turn}
                >
                    TURN
                </button>
                <div className="container position-absolute top-50 start-50 translate-middle text-light">
                    <h1 className="mb-2">{this.props.firstPlayerName}</h1>
                    <div className="container mb-2" onClick={this.handleChange}>
                        {this.state.boardState.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="row justify-content-center"
                            >
                                {row.map((col, colIndex) => (
                                    <div
                                        key={String(rowIndex) + colIndex}
                                        className={
                                            "px-0 col-lg-1 col-2 square position-relative " +
                                            "bg-dark-" +
                                            this.getBoardColor(rowIndex) +
                                            " " +
                                            this.getBoardBorder(
                                                String(rowIndex) + colIndex
                                            )
                                        }
                                    >
                                        <div
                                            className={
                                                "d-block position-absolute " +
                                                this.getBoardBorderSizeAndPosition(
                                                    rowIndex,
                                                    colIndex
                                                ) +
                                                " bg-" +
                                                this.getRowHighlight(rowIndex) +
                                                this.getBoardColor(rowIndex) +
                                                " " +
                                                this.getBoardBorder(
                                                    String(rowIndex) + colIndex
                                                )
                                            }
                                        ></div>
                                        <button
                                            className={
                                                "btn btn-dark-" +
                                                this.getBoardColor(rowIndex) +
                                                " p-0 w-75 h-75 rounded-circle position-absolute top-50 start-50 translate-middle"
                                            }
                                            disabled={
                                                !this.getDisableState(
                                                    rowIndex,
                                                    colIndex
                                                )
                                            }
                                            onClick={() =>
                                                this.pop(rowIndex, colIndex)
                                            }
                                        ></button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <h1 className="mb-0">{this.props.secondPlayerName}</h1>
                </div>
                <button
                    className={
                        "btn btn-outline-light position-absolute bottom-0 start-50 mb-4 translate-middle-x d-" +
                        this.getTurnBtnVisibility(1, this.state.playerTurn)
                    }
                    onClick={this.turn}
                >
                    TURN
                </button>
            </div>
        );
    }
}

export default GameScene;
