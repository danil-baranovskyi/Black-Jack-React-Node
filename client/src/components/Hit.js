import React from "react";
import {hit} from "../store/game/actions.js";
import {connect} from "react-redux";

const Hit = ({hit}) => {
    return (
        <React.Fragment>
            <button className="manipulation-btn hit-btn" onClick={hit}>
                Hit
            </button>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    hit,
};

export default connect(null, mapDispatchToProps)(Hit);