import React from "react";
import diamondSuit from "../../../server/static/img/diamondSuit.png";

export const Card = () => {
    return (
        <div className="card">
            <div className="card-value-up">
                2
            </div>
            <img src={diamondSuit} className="card-icon" alt="Suit"/>
            <div className="card-value-down">
               2
            </div>
        </div>
    );
}