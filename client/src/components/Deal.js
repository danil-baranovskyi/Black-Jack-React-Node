import React from "react";
import {deal} from "../store/game/actions.js";
import {connect} from "react-redux";

const Deal = ({deal}) => {
    return (
        <React.Fragment>
            <button className="manipulation-btn deal-btn" onClick={deal}>
                Deal
            </button>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    deal,
}

export default connect(null, mapDispatchToProps)(Deal);