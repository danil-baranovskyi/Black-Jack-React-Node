import React, {useMemo} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {currentPlayer, players, winners} from "../store/game/selectors.js";
import Player from "./Player.js";

const Table = ({players, currentPlayer, winners}) => {
    const drawPlayers = useMemo(() => {
        return players.map((player, i) => (
            <Player
                name={player.name}
                key={i}
                id={i}
                cards={player.cards}
                score={player.score}
                isCurrentPlayer={player.isActive}
                isWin={player.isWinner}
            />
        ));
    }, [players, winners, currentPlayer]);

    return (
        <section className="table">
            {drawPlayers}
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    players,
    currentPlayer,
    winners
})

export default connect(mapStateToProps, null)(Table)