import React, {useMemo} from "react";
import {hit} from "../store/game/actions.js";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {isLoading, winners} from "../store/game/selectors.js";

const Hit = ({hit, winners, isLoading}) => {
    const disabled = useMemo(() => {
        return winners !== null || isLoading;
    }, [winners, isLoading]);

    return (
        <React.Fragment>
            <button className="manipulation-btn hit-btn" onClick={hit} disabled={disabled}>
                Hit
            </button>
        </React.Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    winners,
    isLoading
})

const mapDispatchToProps = {
    hit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hit);