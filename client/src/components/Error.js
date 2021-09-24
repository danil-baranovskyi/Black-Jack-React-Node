import React from "react";

const Error = ({errorMessage}) => {
    return (
        <div className="error">
            {errorMessage}
        </div>
    );
}

export default Error;