import React, { Component } from "react";
import "./App.css";
import EnterPlayerNameScene from "./components/enter-player-name-scene";
import GameScene from "./components/game-scene";
import WinnerScene from "./components/winner-scene";

class App extends Component {
    state = {
        firstPlayerName: "",
        secondPlayerName: "",
        activeScene: "EnterPlayerName",
        winner: "",
    };

    handleNameChange = (e) => {
        let target = e.target;
        if (target.id === "firstPlayerName") {
            this.setState({ firstPlayerName: target.value });
        }
        if (target.id === "secondPlayerName") {
            this.setState({ secondPlayerName: target.value });
        }
    };

    handleNameSubmitted = () => {
        this.setState({ activeScene: "GameScene" });
    };

    handleWinner = (winner) => {
        this.setState({ winner, activeScene: "WinnerScene" });
    };

    handleRematch = () => {
        this.setState({ activeScene: "GameScene" });
    };

    handleRename = () => {
        this.setState({ activeScene: "EnterPlayerName" });
    };

    render() {
        return (
            <div className="App">
                <EnterPlayerNameScene
                    firstPlayerName={this.state.firstPlayerName}
                    secondPlayerName={this.state.secondPlayerName}
                    activeScene={this.state.activeScene}
                    onChange={this.handleNameChange}
                    onSuccessfulSubmit={this.handleNameSubmitted}
                />
                <GameScene
                    firstPlayerName={this.state.firstPlayerName}
                    secondPlayerName={this.state.secondPlayerName}
                    activeScene={this.state.activeScene}
                    onChange={this.handleNameChange}
                    onSuccessfulSubmit={this.handleNameSubmitted}
                    onGameEnded={this.handleWinner}
                />
                <WinnerScene
                    winner={this.state.winner}
                    activeScene={this.state.activeScene}
                    onRematch={this.handleRematch}
                    onRename={this.handleRename}
                />
            </div>
        );
    }
}

export default App;
