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
    const [word, setWord] = useState(["apple", "تفاح"])
 
    useEffect(() => {
        let index = Math.floor(Math.random() * backgrounds.length);
        console.log(index);
        setPhotoDetails(backgrounds[index])
        document.documentElement.style.setProperty('--bg-url', `url(${backgrounds[index]['url']})`)
    }, [])

    return <div id="home-body">
        <Button text="<" />
        <Card english={word[0]} arabic={word[1]}/>
        <Button text =">" />
         <Footer 
         photographer_url={photoDetails.photographer_url}
         photographer={photoDetails.photographer}
         location={photoDetails.image} />
    </div>
}