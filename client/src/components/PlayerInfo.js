import React, {useState} from "react";
import {connect} from "react-redux";
import DelPlayer from "./DelPlayer.js";

const PlayerInfo = () => {
    return (
        <div className="player-info-wrapper">
            <input className="player-name"
                   placeholder="Input name of new player"
                    name="player-name"/>
            <DelPlayer/>
        </div>
    );
}

export default connect(null, null)(PlayerInfo);