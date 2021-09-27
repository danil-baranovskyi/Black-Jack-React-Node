import {createSelector} from "reselect";

const state = (state) => state;

export const currentPlayer = createSelector(
    state,
    state => state.currentPlayer
);

export const winners = createSelector(
    state,
    state => state.winners
);

export const isLoading = createSelector(
    state,
    state => state.isLoading
);

export const token = createSelector(
    state,
    state => state.token
)

export const tokenIsValid = createSelector(
    state,
    state => state.tokenIsValid
)

export const results = createSelector(
    state,
    state => state.gameResults,
)

export const players = createSelector(
    state,
    state => state.players.map((player, i) => {
        const winnersIndexes = winners(state),
            currentPlayerIndex = currentPlayer(state);

        return {
            ...player,
            isActive: currentPlayerIndex === i,
            isWinner: winnersIndexes !== null
                ? winnersIndexes.includes(i)
                : false
        }
    })
);

export const getPlayerByIndex = createSelector(
    state,
    (state) => {
        return (index) => players(state)[index] || null;
    }
)