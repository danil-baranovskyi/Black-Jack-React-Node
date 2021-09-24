import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import DellPlayer from "./DelPlayer.js";

const PlayerInfo = ({id, value, changeCurrentPlayer, removeCurrentPlayer}) => {
    const [errorMessage, setErrorMessage] = useState("")

    const handleErrorMessage = useCallback((errMessage) => {
        setErrorMessage(errMessage)
    }, [errorMessage])

    const handleChange = useCallback((e) => {
        const currValue = e.target.value;
        if(currValue.length < 3) {
            handleErrorMessage("Name must be more then 3 symbols!");
        }

        if(currValue.length > 9) {
            handleErrorMessage("Name must be less then 9 symbols!");
        }

        if (currValue.length > 3 && currValue.length < 10) {
            handleErrorMessage("");
        }

        changeCurrentPlayer(id, currValue)
    }, [id, changeCurrentPlayer])

    const handleRemove = useCallback(
        () => removeCurrentPlayer(id),
        [id, removeCurrentPlayer]
    );

    return (
        <div className="player-info-wrapper">
            <div className="input-error">
                {errorMessage}
            </div>
            <div className="player-name-wrapper">
                <input className="player-name"
                       placeholder="Input name of new player"
                       name="player-name" value={value} onInput={handleChange}
                       maxLength="9"
                />
                <DellPlayer handleRemove={handleRemove}/>
            </div>
        </div>
    );
}

export default connect(null, null)(PlayerInfo);