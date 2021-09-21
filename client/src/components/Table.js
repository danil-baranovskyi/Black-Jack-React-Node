import React, {useMemo} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {players} from "../store/game/selectors.js";
import Player from "./Player.js";

const Table = ({players}) => {
    const drawPlayers = useMemo(() => {
        let dPlayers = [];

        for(let i = 0; i < players.length; i++){
            dPlayers.push(<Player name={players[i].name} key={i} id={i} cards={players[i].cards}/>)
        }
        return dPlayers;
    }, [players]);

    return (
        <section className="table">
            {drawPlayers}
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    players,
})

export default connect(mapStateToProps,null)(Table)