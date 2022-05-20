import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';

export default function App() {

    const [tenzies, setTenzies] = useState(false);

    const [dice, setDice] = useState(allNewDice());

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValu = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValu)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("Yay! you,ve won!")
        }
    }, [dice])

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
        } else {
            setDice(allNewDice);
            setTenzies(false);
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
        </main>
    )
}
