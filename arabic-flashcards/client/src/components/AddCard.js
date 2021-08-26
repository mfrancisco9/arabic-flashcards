import axios from "axios";
import React, { useState } from "react";
import "../css/card.css";

export default function AddCard(props) {
  const [newWord, setNewWord] = useState({
    en: "",
    ar: "",
    pw: ""
  })

  const password = "learningisfun"

  const addWord = () => {
    if (newWord.pw === password) {
    axios({
      method: 'POST',
      url: '/api/cards/newcard',
      data: {
        en: newWord.en,
        ar: newWord.ar
      }
    }).then((success) => {
      alert("Word Added")
    }).catch((err) => {
      console.log("Error adding card")
      if (err) {
        console.log(err)
      }
    })
  } else {
    console.log("wrong password")
  }
  }


  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-filter">
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
        <div className="shape gradient add-card-body">
          <input className="new-word-field" placeholder="english word"
                        onChange={(e) => setNewWord({...newWord, en: e.target.value})}
                        ></input>
          <input className="new-word-field" placeholder="arabic word"
                        onChange={(e) => setNewWord({...newWord, ar: e.target.value})}
                        ></input>

          <div id="password-row">
            <input
            type="password"
              className="password-field"
              placeholder="special code"
              onChange={(e) => setNewWord({...newWord, pw: e.target.value})}
            ></input>
            <button className="add-word-button" onClick={() => addWord()}>add</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
