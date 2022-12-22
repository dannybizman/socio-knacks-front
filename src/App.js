import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <>
    <Router>

    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
    </Router>
      
      

    </>
  );
}

export default App;