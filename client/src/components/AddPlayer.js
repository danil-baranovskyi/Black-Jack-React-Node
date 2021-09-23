import React from "react";
import {connect} from "react-redux";
import {incrementPlayersCount} from "../store/game/actions.js";

const AddPlayer = ({incrementPlayersCount}) => {
    return (
        <div className="add-player-wrapper">
            <button className="add-player" onClick={incrementPlayersCount}>
                Add New
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    incrementPlayersCount,
}

export default connect(null, mapDispatchToProps)(AddPlayer);