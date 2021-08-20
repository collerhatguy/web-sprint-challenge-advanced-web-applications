
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axiosWithAuth from "./helpers/axiosWithAuth";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {

  const logout = () => {
    axiosWithAuth().post("/logout")
      .then(() => {
        localStorage.removeItem("token")
      })
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a 
            data-testid="logoutButton" 
            href="#"
            onClick={logout}
          >logout</a>
        </header>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.