import {createAction} from "redux-actions";
import {createRequestAction} from "../helpers/createRequestAction.js";

export const deal = createRequestAction("DEAL", () => ({
    request: {
        url: '/deal'
    }
}));

export const hit = createRequestAction("HIT", () => ({
    request: {
        url: '/hit'
    }
}));

export const stand = createRequestAction("STAND", () => ({
    request: {
        url: '/stand'
    }
}));