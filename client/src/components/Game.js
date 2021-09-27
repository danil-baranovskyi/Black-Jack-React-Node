import React, {useCallback, useEffect, useState} from "react";
import Table from "./Table.js";
import {Manipulation} from "./Manipulation.js";
import {currentState, gameResults, removeGameResults} from "../store/game/actions.js";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {isLoading, winners} from "../store/game/selectors.js";
import Loader from "./Loader.js";
import ShowHistory from "./ShowHistory.js";
import Results from "./Results.js";

const Game = ({currentState, isLoading, gameResults, removeGameResults}) => {
    const [showHistory, setShowHistory] = useState(false)

    const handleShowHistory = useCallback(() => {
        gameResults();
        setShowHistory(state => {
            state = true;
            return state;
        });
    }, [ShowHistory, gameResults]);

    const handleHideHistory = useCallback(() => {
        setShowHistory(state => {
            state = false;
            return state;
        })

        removeGameResults();
    }, [ShowHistory, removeGameResults]);

    useEffect(() => {
        currentState();
    }, [])

    return (
        <div className="game">
            {showHistory ? <Results hideHistory={handleHideHistory}/> : ""}
            <Loader isLoading={isLoading}/>
            <Manipulation showHistory={handleShowHistory}/>
            <Table/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    winners,
    isLoading
})

const mapDispatchToProps = {
    currentState,
    gameResults,
    removeGameResults
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);