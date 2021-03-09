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

  const projectList = [
    {
      name: "Common.gg",
      img: "./assets/commongg.png",
      link: "https://common.gg/",
      repoLink: "",
      text: "A social media website tailored specifically for gamers. We're starting off catering specifically to Riot Game's Teamfight Tactics, but we hope to one day expand to all of gaming."
    },
    {
      name: "Employee Directory",
      img: "./assets/employeedirectory.png",
      link: "https://darkorin.github.io/employee-directory/",
      repoLink: "https://github.com/Darkorin/employee-directory",
      text: "A simple employee search and sort directory built using React.js. It takes an employee list (Demo imported from Random User API) and displays it. You can use the search function to search for employees in realtime with the list updating as you type. It also allows you to sort the list by name."
    },
    {
      name: "SCF Arcade",
      img: "./assets/scfarcade.png",
      link: "https://darkorin.github.io/Salty-Cloud-Frogs-Project-1/",
      repoLink: "https://github.com/Darkorin/Salty-Cloud-Frogs-Project-1",
      text: "A simple website to play Tic-Tac-Toe or Sudoku. One of the earlier projects we created in coding Bootcamp, it is written with vanilla Javascript and Jquery, it makes API calls through AJAX."
    }, {
      name: "Pathfinder Character Sheet(Incomplete)",
      img: "./assets/pfcharsheet.png",
      link: "https://pathfindercharactersheet.herokuapp.com/create/5",
      repoLink: "https://github.com/Darkorin/PathfinderCharacterSheet",
      text: "A character creator for the Pathfinder Tabletop RPG. I created this project with a couple of colleagues for the NEXT LEVEL contest. We only spent about 1 week working on it and we were not able to quite finish it due to the short time constraint. It is built using a Node express server and the Handlebars templating engine."
    }
  ];

  const bodyStyle = {
    backgroundImage: `url(${images.background})`,
    height: "100%",
    width: "100%",
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
              <Projects projects={projectList} theme={theme} />
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
