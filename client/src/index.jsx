import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import "./styles/main.scss";
import {App} from "./components/App.js";
import store from "./store/store.js";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);