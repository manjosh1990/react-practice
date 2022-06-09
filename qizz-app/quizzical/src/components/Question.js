import React from "react";

export default function Question(props){
    const {id, question, options, selectOption , checkAnswers} = props
    
    const correctAnsElems = options.map( (item, key) =>{
       // console.log("item " + item + "key : "+key + " ,selectedOptionIndex :"+selectedOptionIndex)

       function  getCssClassName(){
            if(item.selected && !checkAnswers)
                 return "selected"
            else if(item.correct_answer && checkAnswers) 
                return "correct"
            else if(item.selected && checkAnswers && !item.correct_answer)
                return "incorrect"
        }
        let option = item.value.replace(/&quot;/g, '"').replace(/&#039;/g, '\'')
      //  console.log( key === selectedOptionIndex)
        return( 
            <span key ={key} 
                className={`options ${getCssClassName()}`}
                onClick={()=>selectOption(id,item)}
                >{option}
            </span>
            )
    })

    return(
        <div className="question">
           <h3>{question.replace(/&quot;/g, '"').replace(/&#039;/g, '\'')}</h3>
           <div className="options-wrapper">
            {correctAnsElems}
           </div>
        </div>
    )
}