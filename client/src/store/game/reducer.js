import {handleActions} from "redux-actions";
import {currentState, hit, reset, stand} from "./actions.js";

const initialState = {
    token: window.localStorage.getItem('token') || null,
    isLoading: false,
    players : [],
    winners: null,
    currentPlayer: null
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
        players: data.players,
        winners: data.winners,
        currentPlayer: data.currentPlayer
    };
}

const handleCurrentStateFail = (state, {payload: {data}}) => {
    console.log("FAIL!!!")
    return {
        ...state,
        isLoading: false,
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

const handleHitFail = (state, {payload: {data}}) => {
    console.log("FAIL!!!")
    return {
        ...state,
        isLoading: false,
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

const handleStandFail = (state, {payload: {data}}) => {
    console.log("FAIL!!!")
    return {
        ...state,
        isLoading: false,
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