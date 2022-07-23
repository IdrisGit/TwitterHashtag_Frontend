import React from "react";
import './LoadingScreen.css'

const LoadingScreen = () => {
    return(
        <div className="container">
            <div className="lds-ring laoding "><div></div><div></div><div></div><div></div></div>
        </div>
    )
};


export default LoadingScreen;