import React, {useMemo} from "react";
import PlayerInfo from "./PlayerInfo.js";
import AddPlayer from "./AddPlayer.js";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {currentState, gameStart} from "../store/game/actions.js";
import {playersCount} from "../store/game/selectors.js";
import DelPlayer from "./DelPlayer.js";

const InitPlayers = ({currentState, playersCount, gameStart}) => {
    const showInputs = useMemo(() => {
        const inputs = [];

        for(let i = 0; i < playersCount; i++) {
            inputs.push(
                <PlayerInfo key={i}/>
            )
        }

        return inputs;
    }, [playersCount])

    const submitData = (e) => {
        e.preventDefault();
        const playersNames = [];
        e.target.elements["player-name"].forEach((el => playersNames.push(el.value)))
        console.log(playersNames)
        gameStart(playersNames);
    }

    return (
        <div className="init-players-wrapper">
            <AddPlayer/>
            <form className="init-players" onSubmit={submitData}>
                {showInputs}
                <button className="start-game">
                    Start
                </button>
            </form>
        </div>

    );
}

const mapStateToProps = createStructuredSelector({
    playersCount
})

const mapDispatchToProps = {
    currentState,
    gameStart
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPlayers);