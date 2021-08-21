import './App.css';
import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor= "#842743";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
    
  }
  return (
    <>
    <Router>
    <Navbar title= "TEXT UTILITY" mode = {mode} toggleMode = {toggleMode}/> 
    <div className="container my-3">
    <Switch>
          <Route axact path="/about">
            <About mode = {mode}/>
          </Route>
          <Route axact path="/">
          <Formtext heading= "Enter the text to analyze" mode = {mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
