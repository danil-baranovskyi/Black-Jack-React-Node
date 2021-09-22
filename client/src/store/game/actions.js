import {createRequestAction} from "../helpers/createRequestAction.js";

export const currentState = createRequestAction("CURRENT_STATE", () => ({
    request: {
        url: '/state'
    }
}));

export const hit = createRequestAction("HIT", () => ({
    request: {
        method: "post",
        url: '/hit'
    }
}));

export const stand = createRequestAction("STAND", () => ({
    request: {
        method: "post",
        url: '/stand'
    }
}));

export const reset = createRequestAction("RESET", () => ({
    request: {
        method: "post",
        url: '/reset'
    }
}));