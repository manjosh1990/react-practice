import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';

export default function App() {

    const [tenzies, setTenzies] = useState(false);
    const [dice, setDice] = useState(allNewDice());
    const [rolls, setRolls] = useState(0);
    const [highScore, setHighscore] = useState(getHighScore());

    function getHighScore() {
        return localStorage.getItem("highScore") ? JSON.parse(localStorage.getItem("highScore")) : 0;
    }
    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("Yay! you,ve won!")
            if (getHighScore() ==0 || (getHighScore() >0 && getHighScore() > rolls)) {
                localStorage.setItem("highScore", JSON.stringify(highScore));
                setHighscore(rolls);
            }
        }
    }, [dice, highScore,rolls])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(
                generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return !die.isHeld ? generateNewDie() : die
            }))
            setRolls(old => old + 1);
        } else {
            setDice(allNewDice);
            setTenzies(false);
            setRolls(0);
        }
    }

    function holdDice(id) {
        console.log(id)
        //  let newArr = []
        //  newArr = dice.map(die => {
        //         if(die.id === id){
        //             die.isHeld = !die.isHeld;
        //         }
        //         return die
        // }
        // )
        // setDice(newArr)
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } : die
        }))
    }

    const dieElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieElements}
            </div>
            <button
                onClick={rollDice}
                className="roll-dice"
            >{tenzies ? "New Game" : "Roll"}
            </button>
            <div className="score">
                <h3>Total Rolls: {rolls} </h3>
                <h3>High Score: {highScore}</h3>
            </div>
        </main>
    )
}
