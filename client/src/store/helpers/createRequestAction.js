import {createAction} from "redux-actions";

export const createRequestAction = (type, payloadCreator) => {
    const requestActions = createAction(type, payloadCreator);
    requestActions.success = `${type}_SUCCESS`;
    requestActions.fail = `${type}_FAIL`;

    return requestActions;
}