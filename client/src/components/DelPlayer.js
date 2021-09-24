import React from "react";
import {connect} from "react-redux";

const DellPlayer = ({handleRemove}) => {
    return (
        <React.Fragment>
            <button className="del-player" onClick={handleRemove} type="button">
                &#10008;
            </button>
        </React.Fragment>
    );
}

export default connect(null, null)(DellPlayer);