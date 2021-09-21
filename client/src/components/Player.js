import React, {useMemo} from "react";
import {Card} from "./Card.js";

const Player = ({name, id, cards}) => {
    const drawCards = useMemo(() => {

        let dCards = [];

        for(let i = 0; i < cards.length; i++){
            dCards.push(<Card icon={cards[i].icon} iconSrc={cards[i].src} key={i}/>)
        }
        return dCards;
    }, [cards]);

    return (
        <div className="player">
            <h2 className="player-name">
                {name}
            </h2>
            <div className="player-cards">
                {drawCards}
            </div>
            <footer className="player-footer">
                <span className="player-score">
                    4234
                </span>
            </footer>
        </div>
    );
}

export default Player;