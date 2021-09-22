import React, {useEffect} from "react";
import Table from "./Table.js";
import {Manipulation} from "./Manipulation.js";
import {currentState} from "../store/game/actions.js";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {isLoading, winners} from "../store/game/selectors.js";
import Loader from "./Loader.js";

const Game = ({currentState, isLoading}) => {
    useEffect(() => {
        currentState();
    }, [])

    return (
        <div className="game">
            <Loader isLoading={isLoading}/>
            <Manipulation/>
            <Table/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    winners,
    isLoading
})

const mapDispatchToProps = {
    currentState
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);