import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import questions from '../../questions.json'
import M from 'materialize-css'
import correctNotification from '../../assets/audio/correct-answer.mp3'
import wrongNotification from '../../assets/audio/wrong-answer.mp3'
import buttonNotification from '../../assets/audio/button-sound.mp3'

const Play = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [nextQuestion, setNextQuestion] = useState({});
    const [previousQuestion, setPreviousQuestion] = useState({});
    const [numberOfQuestion, setNumberOfQuestion] = useState(0);
    const [numberOfAnsweredQuestion, setNumberOfAnsweredQuestion] = useState(0);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [hints, setHints] = useState(5);
    const [fiftyFifty, setFiftyFifty] = useState(0);
    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
    const [time, setTime] = useState({});

    useEffect(() => {
        const displayQuestions = () => {
            if (questions?.length) {
                setCurrentQuestion(questions[currentQuestionIndex]);
                setNextQuestion(questions[currentQuestionIndex + 1]);
                setPreviousQuestion(questions[currentQuestionIndex - 1]);
                setNumberOfQuestion(questions.length);
            }
        }
        displayQuestions();
    }, [currentQuestionIndex]);

    const handleOptionClick = (e) => {
        if (e.target.innerHTML === currentQuestion.answer) {
            setTimeout(() => {
                document.getElementById('correct-sound').play();
            }, 250);
            correct()
        }
        else {
            setTimeout(() => {
                document.getElementById('wrong-sound').play();
            }, 250);
            wrong();
        }
    }

    const handleButtonClick = () => {
        playButtonSound();
    }

    const playButtonSound = () => {
        document.getElementById('button-sound').play();
    }

    const correct = () => {
        M.toast({
            html: 'Correct Answer!',
            classes: 'toast-valid',
            displayLength: 1500
        });

        setScore(score + 1);
        setCorrectAnswer(correctAnswer + 1);
        setcurrentQuestionIndex(currentQuestionIndex + 1);
        setNumberOfAnsweredQuestion(numberOfAnsweredQuestion + 1);
    }

    const wrong = () => {
        navigator.vibrate(1000);
        M.toast({
            html: 'Wrong Answer!',
            classes: 'toast-invalid',
            displayLength: 1500
        });

        setWrongAnswers(wrongAnswers + 1);
        setcurrentQuestionIndex(currentQuestionIndex + 1);
        setNumberOfAnsweredQuestion(numberOfAnsweredQuestion + 1);
    }

    return (
        <>
            <Helmet><title>Quiz Page</title></Helmet>
            <>
                <audio id="correct-sound" src={correctNotification}></audio>
                <audio id="wrong-sound" src={wrongNotification}></audio>
                <audio id="button-sound" src={buttonNotification}></audio>
            </>
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
                        <span>{currentQuestionIndex + 1} of {numberOfQuestion}</span>
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
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionA}</p>
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionB}</p>
                </div>
                <div className="option-container">
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionC}</p>
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionD}</p>
                </div>
                <div className="button-container">
                    <button onClick={handleButtonClick}>Previous</button>
                    <button onClick={handleButtonClick}>Next</button>
                    <button onClick={handleButtonClick}>Quit</button>
                </div>
            </div>
        </>
    )
}

export default Play
