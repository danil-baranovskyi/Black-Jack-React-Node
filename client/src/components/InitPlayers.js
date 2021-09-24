import React, {useCallback, useState} from "react";
import PlayerInfo from "./PlayerInfo.js";
import AddPlayer from "./AddPlayer.js";
import {connect} from "react-redux";
import {gameStart} from "../store/game/actions.js";
import Error from "./Error.js";

const InitPlayers = ({gameStart}) => {
    const [newPlayers, setNewPlayer] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    const handleErrorMessage = useCallback((errMessage) => {
        setErrorMessage(errMessage)
    }, [errorMessage])

    const removeCurrentPlayer = useCallback(
        (index) => setNewPlayer((state) => {
            state = [...state];
            state.splice(index, 1)
            return state;
        }),
        []
    )

    const changeCurrentPlayer = useCallback(
        (index, value) => setNewPlayer((state) => {
            state = [...state];
            state[index] = value;
            return state;
        }),
        []
    )

    const addNewPlayer = useCallback(
        () => setNewPlayer((state) => [...state, ""]),
        []
    )

    const submitData = useCallback((e) => {
        e.preventDefault();
        let canSubmit = true;

        if (newPlayers.length < 2) {
            handleErrorMessage("There are minimum two players for start game!");
            canSubmit = false;
        }


        for (let i = 0; i < newPlayers.length; i++) {
            if (newPlayers[i].trim().length <= 3 || newPlayers[i].trim().length > 9) {
                canSubmit = false;
                handleErrorMessage("Invalid Data!");
                break;
            }
        }

        canSubmit && gameStart(newPlayers);
    }, [newPlayers])

    return (
        <div className="init-players-wrapper">
            <Error errorMessage={errorMessage}/>
            <AddPlayer addNewPlayer={addNewPlayer}/>
            <form className="init-players" onSubmit={submitData}>
                {newPlayers.map((name, i) => (
                    <PlayerInfo
                        key={i}
                        id={i}
                        value={name}
                        changeCurrentPlayer={changeCurrentPlayer}
                        removeCurrentPlayer={removeCurrentPlayer}
                    />
                ))}
                <button className="start-game">
                    Start
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    gameStart
}

export default connect(null, mapDispatchToProps)(InitPlayers);