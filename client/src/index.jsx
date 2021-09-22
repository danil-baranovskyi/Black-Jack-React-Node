import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {App} from "./components/App.js";
import store from "./store/store.js";
import "./styles/main.scss";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);