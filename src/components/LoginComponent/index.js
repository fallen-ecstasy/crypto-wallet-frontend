import React from 'react'
import './style.css'



export default function Login(props) {

    function onSignUp() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () =>
            container.classList.add('right-panel-active'));

        signInButton.addEventListener('click', () =>
            container.classList.remove('right-panel-active'));
    }
    return (
        <>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="/">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-ethereum"></i></a>
                            <a href="/" className="social"><i className="fab fa-google"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" name="userName"/>
                        <input type="email" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="/">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-ethereum"></i></a>
                            <a href="/" className="social"><i className="fab fa-google"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <a href="/">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={onSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


