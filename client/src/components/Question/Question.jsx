import React, { useContext, useEffect } from 'react';
import "./Question"
import { QuestionContext } from '../../context/QuestionContext';
import OptionBTN from './OptionBTN/OptionBTN';

const Question = () => {
    const {question ,shuffledOptions, setShuffledOptions} = useContext(QuestionContext)
    console.log(question)
    return (
        <>
            <h2>{question?.question}</h2>
            {question["options"].map((option, index) => (
                <OptionBTN key={index} option={option}/>
            ))}
        </>
    );
}

export default Question;
