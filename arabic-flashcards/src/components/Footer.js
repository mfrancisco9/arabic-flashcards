import React from "react";
import "../css/footer.css"

export default function Footer(props) {
return (
 
    <footer id="footer">
    
    <span id="location">Background: {props.location}. Photo by <a href={props.photographer_url}>{props.photographer}</a></span>
    
    </footer>

    )}