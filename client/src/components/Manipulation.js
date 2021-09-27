import React from "react";
import Hit from "./Hit.js";
import Stand from "./Stand.js";
import Winner from "./Winner.js";
import Reset from "./Reset.js";
import ShowHistory from "./ShowHistory.js";

export const Manipulation = ({showHistory}) => {
    return (
        <section className="manipulation">
            <div className="manipulation-btn-wrapper">
                <Hit/>
                <Stand/>
                <Reset/>
                <ShowHistory showHistory={showHistory}/>
            </div>
            <Winner/>
        </section>
    );
}