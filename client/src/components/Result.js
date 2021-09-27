import React, {useMemo} from 'react';
import Player from "./Player.js";

const Result = ({players, winners}) => {
    const drawPlayers = useMemo(() => {
        return players.map((player, i) => (
            <Player
                name={player.name}
                key={i}
                id={i}
                cards={player.cards}
                score={player.score}
                isWin={winners.includes(i)}
            />
        ));
    }, [players, winners]);

    return (
        <React.Fragment>
            <div className="game-result">
                {drawPlayers}
            </div>
        </React.Fragment>
    );
};

export default Result;