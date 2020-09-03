import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogoutButton from "./components/logoutButton";
import LoginButton from "./components/loginButton";
import ShowInfo from "./components/showUserInfo";

function App() {
  return (
    
    <div className="App">
      <h1>Matt's TAM Challenge #3</h1>
      <LoginButton />
      <LogoutButton />
      <ShowInfo />
    </div>
  );
}

export default App;
