import {handleActions} from "redux-actions";
import {currentState,  gameStart, hit, reset, stand} from "./actions.js";

const initialState = {
    token: localStorage.getItem('token') || null,
    tokenIsValid: true,
    isLoading: false,
    players : [],
    winners: null,
    currentPlayer: null,
}

const handleGameStartSuccess = (state, {payload: {data}}) => {
    localStorage.setItem("token", data.token);
    return {
        ...state,
        tokenIsValid: true,
        ...data
    }
}

const handleLoading = (state) => {
    return {
        ...state,
        isLoading: true,
    }
};

const handleCurrentStateSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        tokenIsValid: true,
        ...data
    };
}

const handleCurrentStateFail = (state) => {
    console.log("FAIL!!!");
    return {
        ...state,
        tokenIsValid: false
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

const handleHitFail = (state) => {
    console.log("FAIL!!!");
    return {
        ...state,
    };
}
//=========

const handleStandSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        ...data
    };
}

const handleStandFail = (state) => {
    console.log("Fail");
    return {
        ...state,
    };
}
//========

const handleResetSuccess = (state, {payload: {data}}) => {
    return {
        ...state,
        isLoading: false,
        ...data
    };
}

const handleResetFail = (state) => {
    return {
        ...state,
    };
}

//========
const game = handleActions(
    {
        [gameStart.success]: handleGameStartSuccess,

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
        [reset.fail]: handleResetFail,

    },
    initialState
)

export default game;