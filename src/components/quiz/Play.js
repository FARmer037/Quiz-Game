import React from 'react'
import { Helmet } from 'react-helmet'

const Play = () => {
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
                    <h5>Tony : __________________</h5>
                    <h5>Clay : The third.</h5>
                </div>
                <div className="option-container">
                    <p className="option">What time is it?</p>
                    <p className="option">How much is the apple?</p>
                </div>
                <div className="option-container">
                    <p className="option">How many rooms are there?</p>
                    <p className="option">Which floor are you going to?</p>
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
