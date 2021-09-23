import React from "react";
import {connect} from "react-redux";
import {decrementPlayersCount} from "../store/game/actions.js";

const AddPlayer = ({decrementPlayersCount}) => {
    return (
        <React.Fragment>
            <button className="del-player" onClick={decrementPlayersCount} type="button">
                &#10008;
            </button>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    decrementPlayersCount,
}

export default connect(null, mapDispatchToProps)(AddPlayer);