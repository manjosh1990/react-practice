import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
export default function App() {

    const [dice, setDice] = useState(allNewDice());
    
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
        setDice(oldDice => oldDice.map(die =>{
            return !die.isHeld?generateNewDie():die
        }))
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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieElements}
            </div>
            <button onClick={rollDice} className="roll-dice">Roll</button>
        </main>
    )
}
