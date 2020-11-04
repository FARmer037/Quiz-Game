import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ques from '../../questions.json'

const Play = () => {
    const [questions, setQuestions] = useState(ques);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [nextQuestion, setNextQuestion] = useState({});
    const [previousQuestion, setPreviousQuestion] = useState({});
    const [numberOfQuestion, setNumberOfQuestion] = useState(0);
    const [numberOfAnsweredQuestion, setNumberOfAnsweredQuestion] = useState(0);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wronngAnswers, setWrongAnswers] = useState(0);
    const [hints, setHints] = useState(5);
    const [fiftyFifty, setFiftyFifty] = useState(0);
    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
    const [time, setTime] = useState({});

    const displayQuestions = () => {
        if (questions?.length) {
            setCurrentQuestion(questions[currentQuestionIndex]);
            setNextQuestion(questions[currentQuestionIndex + 1]);
            setPreviousQuestion(questions[currentQuestionIndex - 1]);
        }
    }

    useEffect(() => {
        displayQuestions();
    }, []);

    // console.log("Answer is >> ", answer);
    console.log("Current Question >> ", currentQuestion);
    console.log("Previous Question >> ", previousQuestion);
    console.log("Next Question >> ", nextQuestion);
    console.log("Answer >> ", currentQuestion.answer);

    return (
        <>
            <Helmet><title>Quiz Page</title></Helmet>
            <div className="question-container">
                <h2>Quiz Mode</h2>
                <div className="lifeline-container">
                    <p>
                        <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                        <span className="lifeline">2</span>
                    </p>
                    <p>
                        <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
                        <span className="lifeline">5</span>
                    </p>
                </div>
                <div className="lifeline-container">
                    <p>
                        <span>1 of 10</span>
                    </p>
                    <p>
                        <span className="lifeline">0.45</span>
                        <span className="mdi mdi-clock-outline mdi-24px"></span>
                    </p>
                </div>
                <div className="question">
                    <h5>{currentQuestion.question}</h5>
                </div>
                <div className="option-container">
                    <p className="option">{currentQuestion.optionA}</p>
                    <p className="option">{currentQuestion.optionB}</p>
                </div>
                <div className="option-container">
                    <p className="option">{currentQuestion.optionC}</p>
                    <p className="option">{currentQuestion.optionD}</p>
                </div>
                <div className="button-container">
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
        </>
    )
}

export default Play
