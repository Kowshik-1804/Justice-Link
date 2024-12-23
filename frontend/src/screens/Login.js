import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/userLogin.css';
import Navbar from '../components/Navbar';
import LawyersInformationPage from '../components/LawyersInformationPage';

function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        setLoginSuccess(true);
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem("userEmail", credentials.email);
        navigate('/lawyers-information'); // Navigate to LawyersInformationPage upon successful login
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className='userlogin'>
        {!loginSuccess ? (
          <form id='loginform' onSubmit={handleSubmit}>
            <h3>Login As user</h3>
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id="email" onChange={onChange}
              value={credentials.email} name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="loginpassword" onChange={onChange}
              value={credentials.password} name="password" />
            <br />
            <button type="submit" className="btn btn-primary">Log In</button>
            <br />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="social">
              <div className="go"><Link to="/loginlawyer"><button type="button" className="btn btn-secondary">Login as Worker</button></Link></div>
              <div className="fb"><Link to="/signupuser"><button type="button" className="btn btn-secondary">Register as User</button></Link></div>
            </div>
          </form>
        ) : (
          <LawyersInformationPage />
        )}
      </div>
    </>
  );
}

export default Login;
