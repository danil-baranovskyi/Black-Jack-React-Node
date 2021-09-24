import React from "react";
import Game from "./Game.js";
import InitPlayers from "./InitPlayers.js";
import {connect} from "react-redux";
import {gameStart} from "../store/game/actions.js";
import {createStructuredSelector} from "reselect";
import {token} from "../store/game/selectors.js";

const App = ({token}) => {
    return (
        <React.Fragment>
            {token !== null  ? <Game/> : <InitPlayers/>}
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    token,
})

const mapDispatchToProps = {
    gameStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);