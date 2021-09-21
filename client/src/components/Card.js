import React from "react";

export const Card = ({icon, iconSrc}) => {
    return (
        <div className="card">
            <div className="card-value-up">
                {icon}
            </div>
            <img src={iconSrc} className="card-icon" alt="Suit"/>
            <div className="card-value-down">
                {icon}
            </div>
        </div>
    );
}