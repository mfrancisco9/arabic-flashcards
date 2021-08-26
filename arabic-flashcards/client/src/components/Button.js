import React from 'react';
import "../css/button.css";

export default function Button(props) {

    return (

        <button className="nav-button" onClick={props.btnClick}>{props.text}</button>

    )
}