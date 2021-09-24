import React from "react";
import {connect} from "react-redux";

const AddPlayer = ({addNewPlayer}) => {
    return (
        <div className="add-player-wrapper">
            <button className="add-player" onClick={addNewPlayer}>
                Add New
            </button>
        </div>
    );
}

export default connect(null, null)(AddPlayer);