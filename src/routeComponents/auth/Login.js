import React, { useState, useContext } from "react";
import ButtonComponent from "../../components/Button";
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
    <form onSubmit={handleSubmit}>
      <section className='container-login'>
        <div className='container-email'>
          <label htmlFor='signupFormEmail'>E-mail Address</label>
          <input
            type='email'
            name='email'
            id='signupFormEmail'
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          />
        </div>

        <div className='container-password '>
          <label htmlFor='signupFormPassword'>Password</label>
          <input
            type='password'
            name='password'
            id='signupFormPassword'
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div>

        <div className='container-btn'>
          <ButtonComponent text={"Login"} />
        </div>
        <div className='container-texto'>
          <h5>Campo de login apenas para ADM</h5>
        </div>
      </section>
    </form>
  );
}

export default Login;
