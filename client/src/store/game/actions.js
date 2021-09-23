import {createRequestAction} from "../helpers/createRequestAction.js";
import {createAction} from "redux-actions";

export const currentState = createRequestAction("CURRENT_STATE", () => ({
    request: {
        method: "post",
        url: '/state',
        data: {
            token: localStorage.getItem('token') || null,
        }
    }
}));

export const hit = createRequestAction("HIT", () => ({
    request: {
        method: "post",
        url: '/hit',
        data: {
            token: localStorage.getItem('token') || null,
        }
    }
}));

export const stand = createRequestAction("STAND", () => ({
    request: {
        method: "post",
        url: '/stand',
        data: {
            token: localStorage.getItem('token') || null,
        }
    }
}));

export const reset = createRequestAction("RESET", () => ({
    request: {
        method: "post",
        url: '/reset',
        data: {
            token: localStorage.getItem('token') || null,
        }
    }
}));

export const gameStart = createRequestAction("GAME_START", (playersNames) =>
    ({
    request: {
        method: "post",
        url: '/start',
        data: {
            playersNames: playersNames,
        }
    }
}));

export const incrementPlayersCount = createAction("INCREMENT_PLAYER_COUNT");
export const decrementPlayersCount = createAction("DECREMENT_PLAYER_COUNT");