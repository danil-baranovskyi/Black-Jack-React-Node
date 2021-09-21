import React from "react";
import {connect} from "react-redux";
import {stand} from "../store/game/actions.js";

const Stand = ({stand}) => {
    return (
        <React.Fragment>
            <button className="manipulation-btn stand-btn" onClick={stand}>
                Stand
            </button>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    stand,
}

export default connect(null, mapDispatchToProps)(Stand);