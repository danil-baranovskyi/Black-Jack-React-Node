import React from "react";
import diamondSuit from "../img/diamondSuit.png";

export const Card = () => {
    return (
        <div className="card">
            <div className="card-value-up">
                2
            </div>
            <img src={diamondSuit} alt="Suit"/>
            <div className="card-value-down">
                2
               123
            </div>
        </div>
    );
}