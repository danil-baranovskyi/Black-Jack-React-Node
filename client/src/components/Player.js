import React from "react";
import {Card} from "./Card.js";

export const Player = () => {
    return (
        <div className="player">
            <h2 className="player-name">
                ASD
            </h2>
            <div className="player-cards">
                <Card />
            </div>
            <footer className="player-footer">
                <span className="player-score">
                    4234
                </span>
            </footer>
        </div>
    );
}