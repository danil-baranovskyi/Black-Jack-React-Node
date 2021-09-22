import React, {useMemo} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {players, winners} from "../store/game/selectors.js";

const Winner = ({winners, players}) => {
    const showWinner = useMemo(() => {
        let winnersStr = '';

        if (winners !== null) {
            if (winners.length === 0) {
                winnersStr = "Winner is NOBODY";
                return winnersStr;
            }

            winnersStr += "Winner is ";

            for (let i = 0; i < winners.length; i++) {
                winnersStr += players[winners[i]].name + " ";
            }
        }

        return winnersStr;
    }, [winners]);

    return (
        <div className="winner-wrapper">
            {showWinner}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    winners,
    players
})

export default connect(mapStateToProps, null)(Winner)