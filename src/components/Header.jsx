import React from "react";

const Header = (props) => {
    return (
        <>
            <nav className="text-center m-4">
                <h1>{props.title}</h1>
            </nav>  
        </>
        
    )
}





export default Header;