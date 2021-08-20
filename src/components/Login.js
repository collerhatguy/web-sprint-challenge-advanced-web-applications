import React from "react";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formState, handleChange, error] = useForm(initialState);
  const { push } = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/login", formState)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        push("/")
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={formState.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formState.value}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"