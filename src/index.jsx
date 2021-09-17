import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import "./styles/main.scss";
import {App} from "./components/App.js";

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);