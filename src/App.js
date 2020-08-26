import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  const [theme, setTheme] = useState({
    background: "Light",
    foreground: "Dark"
  });

  function changeTheme() {
    if (theme.background === "Light") {
      setTheme({
        background: "Dark",
        foreground: "Light"
      });
    } else {
      setTheme({
        background: "Light",
        foreground: "Dark"
      })
    }
  };

  const images = {
    background: `./assets/${theme.background}mode.png`,
    github: `./assets/${theme.foreground}Github.png`,
    email: `./assets/${theme.foreground}Email.png`,
    linkedin: `./assets/${theme.foreground}Linkedin.png`,
    phone: `./assets/${theme.foreground}Phone.png`,
    resume: `./assets/${theme.foreground}Resume.png`,
    portrait: './assets/myface.jpg'
  }

  const projectList = [];

  const bodyStyle = {
    backgroundImage: `url(${images.background})`,
    height: "100vh",
    width: "100vw",
    fontFamily: "'Play', sans-serif"
  }

  return (
    <Router>
      <div style={bodyStyle}>
        <div className="container">
          <Nav theme={theme} changeTheme={changeTheme} />
          <Switch>
            <Route exact path="/">
              <Home images={images} theme={theme} />
            </Route>
            <Route exact path="/projects">
              <Projects images={projectList} theme={theme} />
            </Route>
            <Route exact path="/about">
              <About images={images} theme={theme} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
