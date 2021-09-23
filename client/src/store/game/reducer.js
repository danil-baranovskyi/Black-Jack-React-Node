import {handleActions} from "redux-actions";
import {currentState, decrementPlayersCount, gameStart, hit, incrementPlayersCount, reset, stand} from "./actions.js";

const initialState = {
    token: localStorage.getItem('token') || null,
    isLoading: false,
    players : [],
    winners: null,
    currentPlayer: null,
    playersCount: 0,
}

const handleGameStartSuccess = (state, {payload: {data}}) => {
    localStorage.setItem("token", data.token);
    return {
        ...state,
        ...data
    }
}

const handleIncrementPlayersCount = (state) => {
    let count = state.playersCount;
    count++;
    return {
        ...state,
        playersCount: count,
        token: null,
    }
}

const handleDecrementPlayersCount = (state) => {
    let count = state.playersCount;
    count > 0 ? count-- : count;
    return {
        ...state,
        playersCount: count
    }
}

const handleLoading = (state) => {
    return {
        ...state,
        isLoading: true
    }
};

const handleCurrentStateSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        ...data
    };
}

const handleCurrentStateFail = (state, action) => {
    console.log("FAIL!!!")
    return {
        ...state,
    };
}
//=========
const handleHitSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        ...data
    };
}

const handleHitFail = (state, action) => {
    console.log("FAIL!!!")
    return {
        ...state,
    };
}
//=========

const handleStandSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        players: data.players,
        winners: data.winners,
        currentPlayer: data.currentPlayer
    };
}

const handleStandFail = (state, action) => {
    console.log(action)
    return {
        ...state,
    };
}
//========

const handleResetSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        players: data.players,
        winners: data.winners,
        currentPlayer: data.currentPlayer
    };
}

//========
const game = handleActions(
    {
        [gameStart.success]: handleGameStartSuccess,

        [incrementPlayersCount]: handleIncrementPlayersCount,
        [decrementPlayersCount]: handleDecrementPlayersCount,

        [currentState]: handleLoading,
        [currentState.success]: handleCurrentStateSuccess,
        [currentState.fail]: handleCurrentStateFail,

        [hit]: handleLoading,
        [hit.success]: handleHitSuccess,
        [hit.fail]: handleHitFail,

        [stand]: handleLoading,
        [stand.success]: handleStandSuccess,
        [stand.fail]: handleStandFail,

        [reset]: handleLoading,
        [reset.success]: handleResetSuccess,

    },
    initialState
)

export default game;