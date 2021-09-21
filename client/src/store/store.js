import {applyMiddleware, createStore} from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import game from "./game/reducer.js";

const client = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json'
})

const store = createStore(
    game,
    applyMiddleware(
        axiosMiddleware(client)
    )
);

export default store;