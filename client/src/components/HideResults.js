import React from "react";

const HideResults = ({hideHistory}) => {
    return (
        <button className="hide-btn" onClick={hideHistory}>
            &#10008;
        </button>
    );
}

export default HideResults;