import React, { createContext } from 'react';
import { useState,useEffect } from 'react';


export const QuestionContext = createContext()

const QuestionContextProvider = ({children}) => {
    const [question, setQuestion] = useState({
        "question": "Loading....",
        "options": [
            {"option":"Loading" , "isCorrect":false},
            {"option":"Loading" , "isCorrect":false},
            {"option":"Loading" , "isCorrect":false},
            {"option":"Loading" , "isCorrect":false},
            {"option":"Loading" , "isCorrect":false},
            {"option":"Loading" , "isCorrect":true}
        ]
     })
    const [questionNumber, setQuestionNumber] = useState(0)
    const [shuffledOptions, setShuffledOptions] = useState([]);

    return ( 
        <QuestionContext.Provider value={{
            question, setQuestion,
            questionNumber, setQuestionNumber,
            shuffledOptions, setShuffledOptions
        }}>
            {children}
        </QuestionContext.Provider>
     )
}
 
export default QuestionContextProvider;
