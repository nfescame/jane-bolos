import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../style/login.css";
import api from "../../apis/api";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/store");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <main className='form-signin'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Please login</h1>

        {/* input email */}
        <div className='form-floating'>
          <input
            type='email'
            name='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            value={state.email}
            onChange={handleChange}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>

        {/* input passord */}
        <div className='form-floating'>
          <input
            type='password'
            name='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            value={state.password}
            onChange={handleChange}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Login
        </button>

        <div className='containerSignup'>
          <Link className='signupLink' to='/signup'>
            Signup page.
          </Link>
        </div>
        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2021</p>
      </form>
    </main>
  );
}

export default Login;
