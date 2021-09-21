import React from "react";
import Deal from "./Deal.js";
import Hit from "./Hit.js";
import Stand from "./Stand.js";

export const Manipulation = () => {
    return (
        <section className="manipulation">
            <Deal/>
            <Hit/>
            <Stand/>
        </section>
    );
}