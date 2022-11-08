import React from 'react'
import './style.css'

export default function Login_Mobile(props) {
    function onSignUp() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () =>
            container.classNameList.add('right-panel-active'));

        signInButton.addEventListener('click', () =>
            container.classNameList.remove('right-panel-active'));
    }
    return (
        <>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-ethereum"></i></a>
                            <a href="/" className="social"><i className="fab fa-google"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Sign up</button>

                    </form>
                </div>

                <div className="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-ethereum"></i></a>
                            <a href="/" className="social"><i className="fab fa-google"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}