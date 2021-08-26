import React from "react";
import "../css/footer.css"

export default function Footer(props) {
return (
 
    <footer id="footer">
    
    <span id="location">Background: {props.location}. Photo by <a href={props.photographer_url}>{props.photographer}</a></span>

    <span id="michael">michael francisco 2021</span>

    <span id="add" onClick={props.addClick}>toggle add mode</span>
    
    </footer>

    )}