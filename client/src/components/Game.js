import React from "react";
import {Table} from "./Table.js";
import {Manipulation} from "./Manipulation.js";

export const Game = () => {
    return (
        <div className="game">
            <Manipulation/>
            <Table/>
        </div>
    );
};