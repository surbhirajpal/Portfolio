import React from 'react';
import './App.css';
import Home from './Menu/main'
import About from './About/main'
import Skills from './Skills/main'
import Projects from './Projects/main'
import Contact from './Contact/main'
import Resume from './Resume/main'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="/SurbhiRajpal" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills"component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Router> */}
      <Home />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
