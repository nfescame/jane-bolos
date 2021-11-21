import React, { useState } from "react";

import "../../style/signup.css";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState("");

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/signup", state);
      console.log(response);

      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors(err.response.data.msg);
    }
  }

  return (
    <main className='form-signin'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        {/* input name */}
        <div className='form-floating'>
          <input
            required='true'
            type='text'
            name='name'
            className='form-control'
            id='floatingInput'
            placeholder='name'
            value={state.name}
            onChange={handleChange}
          />
          <label htmlFor='floatingInput'>Name</label>
        </div>
        {/* input email */}
        <div className='form-floating'>
          <input
            required='true'
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
        {/* input password */}
        <div className='form-floating'>
          <input
            required='true'
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
          Sign up
        </button>
        <p className='mt-5 mb-3 text-muted'>&copy; 2021</p>
        {errors !== "" ? <p style={{ color: "red" }}>{errors}</p> : null}
      </form>
    </main>
  );
}

export default Signup;
