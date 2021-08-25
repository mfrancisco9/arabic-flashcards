import React from "react";
import "../css/card.css";

export default function Card() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-filter">
        <defs>
          <filter id="noise">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="64"
              result="blur"
            />
            <feTurbulence
              result="waves"
              type="turbulence"
              baseFrequency="0.735 0.771"
              numOctaves="1"
              seed="256"
            ></feTurbulence>
            <feDisplacementMap
              in="blur"
              in2="waves"
              scale="320"
              xChannelSelector="R"
              yChannelSelector="B"
              result="ripples"
            ></feDisplacementMap>
            <feComposite
              in="waves"
              in2="ripples"
              operator="arithmetic"
              k1="1"
              k2="0"
              k3="1"
              k4="0"
            ></feComposite>
          </filter>
        </defs>
      </svg>

      <div className="word-card">
        <div className="shape noisy"></div>
        <div className="shape gradient">
          <div className="word-card-inner">
            <div className="word-card-en"><span>books</span></div>
            <div className="word-card-ar"><span>كلمات</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
