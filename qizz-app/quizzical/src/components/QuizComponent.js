import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Question from "./Question";
export default function QuizComponent(props) {
    const [loading, setLoading] = useState(true)
    const API_URL = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    const [checkAnswers, setCheckAnswer] = useState(false);
    const [questions, setQuestions] = useState([])
    const [results, setResults] = useState(0);
    let score = 0
    // console.log("rendering")
    useEffect(
        () => {
            setTimeout(() => {
                async function getQuestions() {
                    let questionsArr;
                    try {
                        const res = await fetch(API_URL);
                        const data = await res.json();
                        //console.log("data.results" + JSON.stringify(data.results[0]))
                        questionsArr = data.results.map(obj => {
                            const { category, type, difficulty, question, correct_answer, incorrect_answers } = obj
                            return (
                                {
                                    id: nanoid(),
                                    category: category,
                                    type: type,
                                    difficulty: difficulty,
                                    question: question,
                                    correct_answer: correct_answer,
                                    options: shuffle([correct_answer, ...incorrect_answers], correct_answer)
                                }
                            )
                        })
                    } catch (error) {
                        console.log("error occured while fetch" + error)
                    }
                    setQuestions(questionsArr);
                    setLoading(false);
                }
                getQuestions()
            }, 2000)
        }
        , [])
    // console.log("question "+ JSON.stringify(questions))

    function shuffle(arr, correct_answer) {
        let optionArr = [];

        for (let i = 0; i < arr.length; i++) {
            let randomIndex = Math.floor(Math.random() * i + 1)
            let temp = arr[randomIndex]
            arr[randomIndex] = arr[i]
            arr[i] = temp

        }
        for (let i = 0; i < arr.length; i++) {
            optionArr.push({
                value: arr[i],
                selected: false,
                correct_answer: arr[i] === correct_answer ? true : false
            })
        }
        //  console.log("optionsArr :" + JSON.stringify(optionArr))
        return optionArr;
    }
    function submitQuizz() {
        console.log("submitting answers")
        setCheckAnswer(true);
        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < questions[i].options.length; j++) {
                let option = questions[i].options[j]
                if (option.selected && option.correct_answer) {
                    console.log(JSON.stringify(option))
                    score++
                }
            }
        }
        setResults(score)
    }
    function selectOption(id, answer) {
        // console.log("selected id :" + id + "ans : " + answer.value)
        setQuestions(prev =>
            prev.map(que => {
                return que.id === id ? {
                    ...que,
                    options: lockOption(que.options, answer.value)
                } : que
            })
        )
    }
    function lockOption(options, answer) {
        // console.log("answer : "+answer)
        for (let i = 0; i < options.length; i++) {
            // console.log(options[i].value === answer)
            if (options[i].value === answer)
                options[i].selected = true;
            else
                options[i].selected = false;
        }
        // console.log("after selecting : "+JSON.stringify(options))
        return options;
    }
    const questionElem = questions && questions.map(question => {
        return (
            <Question key={question.id}
                id={question.id}
                category={question.category}
                question={question.question}
                correct_answer={question.correct_answer}
                options={question.options}
                selectOption={selectOption}
                checkAnswers={checkAnswers}
            />
        )
    })
    //   console.log("questionElem " + JSON.stringify(questions[0]))
    return (

        <div className="questions-wrapper">
            {!loading ? (<>
                {questionElem}
                <div className="questions--inputs">
                    {!checkAnswers && props.isQuizStarted && <div className="start-btn" onClick={submitQuizz}>Check Answers</div>}
                    {checkAnswers && props.isQuizStarted && <p>You scored {results}/5 correct answers</p>}
                    {checkAnswers && <div className="start-btn" onClick={props.endQuiz()}>Quit</div>}
                </div>
            </>)
                :
                <div className="loader">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>Loading...
                    <div className="circle circle-4"></div>
                    <div className="circle circle-5"></div>
                </div>
            }
        </div>
    );

}
