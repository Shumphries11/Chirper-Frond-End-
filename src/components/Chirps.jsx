import React from "react";

const Chirps = (props) => {
    return (
        <div>
            <header>
                {props.message}
            </header>
        </div>
    )
}

export default Chirps;