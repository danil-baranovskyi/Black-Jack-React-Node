import React from "react";
import {gameResults} from "../store/game/actions.js";
import {connect} from "react-redux";


const ShowHistory = ({showHistory}) => {
    return (
        <button className="manipulation-btn" onClick={showHistory}>
            History
        </button>
    );
};

const mapDispatchToProps = {
    gameResults,
};

export default connect(null, mapDispatchToProps)(ShowHistory);