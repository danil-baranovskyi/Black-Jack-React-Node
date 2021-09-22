import React from "react";
import Hit from "./Hit.js";
import Stand from "./Stand.js";
import Winner from "./Winner.js";
import Reset from "./Reset.js";

export const Manipulation = () => {
    return (
        <section className="manipulation">
            <div>
                <Hit/>
                <Stand/>
                <Reset/>
            </div>
            <Winner/>
        </section>
    );
}