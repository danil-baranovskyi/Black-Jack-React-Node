import React, {useMemo} from "react";
import {connect} from "react-redux";
import {reset} from "../store/game/actions.js";
import {createStructuredSelector} from "reselect";
import {isLoading, winners} from "../store/game/selectors.js";

const Reset = ({reset, isLoading}) => {
    const disabled = useMemo(() => {
        return isLoading;
    }, [isLoading])
    return (
        <React.Fragment>
            <button className="manipulation-btn reset-btn" onClick={reset} disabled={disabled}>
                Reset
            </button>
        </React.Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    isLoading
})

const mapDispatchToProps = {
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);