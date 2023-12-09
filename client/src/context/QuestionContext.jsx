import React, { createContext } from 'react';
import { useState,useEffect } from 'react';


export const QuestionContext = createContext()

const q = {
    "question": "What is the capital of France?",
    "options": [
        {option:"Berlin" , isCorrect:false},
        {option:"London" , isCorrect:false},
        {option:"Rome" , isCorrect:false},
        {option:"Paris" , isCorrect:true},
    ]
}

const QuestionContextProvider = ({children}) => {
    const [question, setQuestion] = useState(q)
    const [shuffledOptions, setShuffledOptions] = useState([]);

    return ( 
        <QuestionContext.Provider value={{
            question, setQuestion,
            shuffledOptions, setShuffledOptions
        }}>
            {children}
        </QuestionContext.Provider>
     )
}
 
export default QuestionContextProvider;
