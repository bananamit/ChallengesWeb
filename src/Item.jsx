// Challenge 4
import React from "react";
import "./App.css";

export const Item = ({ title, url}) => {
    return (
        <div className="Card">
             <img src={url} alt={title} />
        </div>
    )
}


