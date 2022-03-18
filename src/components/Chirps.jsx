import React from "react";

const Chirps = (props) => {

    return (
        <>
            <div className="border border-dark col-md-3 p-3 m-3">
                <h5>{props.username}</h5>
                <h2>{props.message}</h2>
                <p className="d-flex justify-content-end">{props.posted}</p>
            </div>

        </>
    )
}

export default Chirps;