import React from 'react';

function Login () {
    // init userlogin object that will conatin data fro post request
    let userLogin = {}
    // update userLogin when user enters credentials
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        userLogin = ({ ...userLogin, [name]: value });
    };

    // when user signs up, post userLogin to database
    const handleSignUpSumbmit = (e) => {
        fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogin)
        })
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    // when user logs in, post userLogin to database
    const handleLoginSumbmit = (e) => {
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogin)
        })
            .then((data) => data.json())
            .then(handleRedirect)
            .catch((error) => console.log(error));
    };

    const handleRedirect = (res) => {
        if (res.status === 200){
            window.location.href = 'http://localhost:3000/profile'
        }
        else {
            console.log("Error redirecting client")
        }
    }

    return (
        <div className="login-container">
            <span className="sign-up">
                <h3>Sign Up!</h3>
                <div className="user-input">
                    <div>
                        <label>Email: </label>
                        <input
                            type='email'
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type='password'
                            name='password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button id='submitbtn' onClick={handleSignUpSumbmit}>Submit</button>
                </div>
            </span>
            <span className="login">
                <h3>Login!</h3>
                <div className="user-input">
                    <div>
                        <label>Email: </label>
                        <input
                            type='email'
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type='password'
                            name='password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button id='submitbtn' onClick={handleLoginSumbmit}>Submit</button>
                </div>
            </span>
        </div>
    )
}

export default Login;