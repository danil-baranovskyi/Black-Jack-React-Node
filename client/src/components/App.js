import React from "react";
import Game from "./Game.js";
import InitPlayers from "./InitPlayers.js";
import {connect} from "react-redux";
import {gameStart} from "../store/game/actions.js";
import {createStructuredSelector} from "reselect";
import {token, tokenIsValid} from "../store/game/selectors.js";

const App = ({token, tokenIsValid}) => {
    return (
        <React.Fragment>
            {token && tokenIsValid ? <Game/> : <InitPlayers/>}
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    token,
    tokenIsValid
})

const mapDispatchToProps = {
    gameStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);