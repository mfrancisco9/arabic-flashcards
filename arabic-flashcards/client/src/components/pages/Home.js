import React, {useState, useEffect} from 'react';
import '../../css/home.css'
import Card from '../Card';
import Footer from '../Footer';
import Button from '../Button';

// background images 
import Beirut from "../../images/beirut-jo-kassis.jpg";
import Ramallah from "../../images/ramallah-osmar-valdebenito.jpg";
import Haraz from "../../images/haraz.jpg";
import Abha from "../../images/abha.jpg";
import Amman from "../../images/amman.jpg"
import axios from 'axios';

export default function Home() {

    const backgrounds = [
        {
            url: Beirut,
            image: "Beirut, Lebanon",
            photographer: "Jo Kassis",
            photographer_url: "https://www.pexels.com/@jokassis"
        },
        {
            url: Ramallah,
            image: "Ramallah, Palestine",
            photographer: "Osmar Valdebenito",
            photographer_url: "https://www.flickr.com/photos/b1mbo/"
        },
        {
            url: Haraz,
            image: "Haraz, Yemen",
            photographer: "Rod Waddington",
            photographer_url: "https://www.flickr.com/photos/rod_waddington/"
        },
        {
            url: Abha,
            image: "Abha, Saudi Arabia",
            photographer: "Waseem Anwar",
            photographer_url: "https://www.flickr.com/photos/waseemanwar/"
        },
        {
            url: Amman,
            image: "Amman, Jordan",
            photographer: "Florent Lamoureux",
            photographer_url: "https://www.flickr.com/photos/flrent/"
        }
    ]
    const [photoDetails, setPhotoDetails] = useState({
        url: Beirut,
        image: "Beirut, Lebanon",
        photographer: "Jo Kassis",
        photographer_url: "https://www.pexels.com/@jokassis"
    });
    const [word, setWord] = useState({
        id: 1, 
        en: "bottle",
        ar: "زجاجة"
    })
    const [numWords, setNumWords] = useState(1)

    var wordsLength = 0;

    const nextWord = () => {
        if (word.id < numWords) {
        axios.get("/api/cards/" + (word.id + 1)).then((data) => {
            console.log(data.data)
            setWord(data.data)
        }) 
    } else if (word.id === numWords) {
        axios.get("/api/cards/" + (1)).then((data) => {
            console.log(data.data)
            setWord(data.data)
        }) 
    }
    }

    const prevWord = () => {
        if (word.id > 1) {
        axios.get("/api/cards/" + (word.id - 1)).then((data) => {
            console.log(data.data)
            setWord(data.data)
        }) 
        
    }
    else if (word.id === 1) {
        axios.get("/api/cards/" + (numWords)).then((data) => {
            console.log(data.data)
            setWord(data.data)
        }) 
    }
    }
 
    useEffect(() => {
        let index = Math.floor(Math.random() * backgrounds.length);
        setPhotoDetails(backgrounds[index])
        document.documentElement.style.setProperty('--bg-url', `url(${backgrounds[index]['url']})`)

        axios.get("/api/cards/").then((data) => {
            setNumWords(data.data.length)
            
        }) 
    }, [])

    return <div id="home-body">
        <Button text="<" 
        btnClick={() => prevWord()} />
        <Card english={word.en} arabic={word.ar}/>
        <Button 
        text =">" 
        btnClick={() => nextWord()}
        />
         <Footer 
         photographer_url={photoDetails.photographer_url}
         photographer={photoDetails.photographer}
         location={photoDetails.image} />
    </div>
}