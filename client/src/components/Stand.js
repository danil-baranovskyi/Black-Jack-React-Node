import React, {useMemo} from "react";
import {connect} from "react-redux";
import {stand} from "../store/game/actions.js";
import {createStructuredSelector} from "reselect";
import {isLoading, winners} from "../store/game/selectors.js";

const Stand = ({stand, winners, isLoading}) => {
    const disabled = useMemo(() => {
        return winners !== null || isLoading;
    }, [winners, isLoading])

    return (
        <button className="manipulation-btn stand-btn" onClick={stand} disabled={disabled}>
            Stand
        </button>
    );
}

const mapStateToProps = createStructuredSelector({
    winners,
    isLoading
})

const mapDispatchToProps = {
    stand,
}

export default connect(mapStateToProps, mapDispatchToProps)(Stand);