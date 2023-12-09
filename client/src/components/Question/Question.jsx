import React, { useContext, useEffect } from 'react';
import "./Question"
import { QuestionContext } from '../../context/QuestionContext';
import OptionBTN from './OptionBTN/OptionBTN';

const Question = () => {
    const {question ,shuffledOptions, setShuffledOptions} = useContext(QuestionContext)
    
    useEffect(() => {
        shuffleOptions();
    }, [question]);

    const shuffleOptions = () => {
        const shuffled = [...question.options];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledOptions(shuffled);
    };
    return (
        <>
            <h2>{question.question}</h2>
            {shuffledOptions.map((option, index) => (
                <OptionBTN key={index} option={option}/>
            ))}
        </>
    );
}

export default Question;
