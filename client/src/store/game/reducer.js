import {handleActions} from "redux-actions";
import {currentState,  gameStart, hit, reset, stand} from "./actions.js";

const initialState = {
    token: localStorage.getItem('token') || null,
    isLoading: false,
    players : [],
    winners: null,
    currentPlayer: null,
}

const handleGameStartSuccess = (state, {payload: {data}}) => {
    localStorage.setItem("token", data.token);
    return {
        ...state,
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
        ...data
    };
}

const handleCurrentStateFail = (state, action) => {
    console.log("FAIL!!!");
    console.log(action)
    localStorage.removeItem("token");
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
    console.log("FAIL!!!");
    localStorage.removeItem("token");
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

const handleStandFail = (state, action) => {
    console.log("Fail");
    localStorage.removeItem("token");
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
    localStorage.removeItem("token");
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