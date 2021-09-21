import {handleActions} from "redux-actions";
import {deal, hit, stand} from "./actions.js";

const initialState = {
    players : [],
    winners: null,
    currentPlayer: null
}

const handleDealSuccess = (state, {payload: {data}}) => {
    console.log(data)
    return {
        ...state,
        players: data.players,
        winners: data.winners,
        currentPlayer: data.currentPlayer
    };
}

const handleDealFail = (state, {payload: {data}}) => {
    console.log("FAIL!!!")
    return state;
}
//=========
const handleHitSuccess = (state, {payload: {data}}) => {
    console.log(data)
    return {
        ...state,
        players: data.players,
        winners: data.winners,
        currentPlayer: data.currentPlayer
    };
}

const handleHitFail = (state, {payload: {data}}) => {
    console.log("FAIL!!!")
    return state;
}
//=========

const handleStandSuccess = (state, {payload: {data}}) => {
    console.log(data)
    return {
        ...state,
        players: data.players,
        winners: data.winners,
        currentPlayer: data.currentPlayer
    };
}

const handleStandFail = (state, {payload: {data}}) => {
    console.log("FAIL!!!")
    return state;
}

const game = handleActions(
    {
        [deal.success]: handleDealSuccess,
        [deal.fail]: handleDealFail,

        [hit.success]: handleHitSuccess,
        [hit.fail]: handleHitFail,

        [stand.success]: handleStandSuccess,
        [stand.fail]: handleStandFail,
    },
    initialState
)

export default game;