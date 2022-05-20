import React, { useState, useEffect } from "react";
// import memesData from "../memesData";

function Meme() {

    const API_URL ="https://api.imgflip.com/get_memes"
    
    //states
    const [allMemes, setAllMemes] = useState([]);

    console.log("component rendered")
    useEffect(
        ()=>{
            async function getMemes(){
                const res = await fetch(API_URL)
                const memesData = await res.json()
                setAllMemes(memesData.data.memes)
            }
            getMemes()
    },[])

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getMeme() {
        const dataArray = allMemes
        let end = dataArray.length;
        let index = Math.floor(Math.random() * end);
        let url = allMemes[index].url;
        setMeme(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }

    function handleEvent(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleEvent}
                    ></input>
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleEvent}
                    ></input>
                    <button
                        className="form--button"
                        onClick={getMeme}
                    >Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme">
                    {meme.randomImage && <img src={meme.randomImage} alt="memeImage" className="meme--image"></img>}
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main >
    )
}
export default Meme;