import React, {useMemo} from "react";
import {Card} from "./Card.js";
import {createStructuredSelector} from "reselect";
import {winners} from "../store/game/selectors.js";
import {connect} from "react-redux";
import cn from "classnames";

const Player = ({name, cards, score, isCurrentPlayer, isWin}) => {
    const drawCards = useMemo(() => {
        let dCards = [];

        for (let i = 0; i < cards.length; i++) {
            dCards.push(<Card icon={cards[i].icon} iconSrc={cards[i].src} key={i}/>)
        }

        return dCards;
    }, [cards]);

    const className = useMemo(
        () => cn("player", {"player--active": isCurrentPlayer, "player--winner": isWin}),
        [isCurrentPlayer, isWin]
    )

    return (
        <div className={className}>
            <h2 className="player-name">
                {name}
            </h2>
            <div className="player-cards">
                {drawCards}
            </div>
            <footer className="player-footer">
                <span className="player-score">
                    {score}
                </span>
            </footer>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    winners
});

export default connect(mapStateToProps)(Player);