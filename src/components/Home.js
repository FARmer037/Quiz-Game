import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import SignalCellular4BarOutlinedIcon from '@material-ui/icons/SignalCellular4BarOutlined';

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Quiz Game - Home</title>
            </Helmet>
            <div id="home">
                <section>
                    <div className="header">
                        <SignalCellular4BarOutlinedIcon />
                        <h1>Quiz Game</h1>
                    </div>
                    <div className="play-button-container">
                        <ul>
                            <li><Link className="play-button" to="/play/instruction">Play</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link className="auth-buttons" id="login-button" to="/login">Login</Link>
                        <Link className="auth-buttons" id="signup-button" to="/register">Register</Link>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Home
