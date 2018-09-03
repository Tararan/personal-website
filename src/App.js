/* import React from "react";
// import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavList from "./NavList";
import { navListContent } from "./navListContent";

import JobsList from "./JobsList";
import { jobsListContent } from "./jobsListContent";

import EducationList from "./EducationList";
import { educationListContent } from "./educationListContent";
import "./styles/App.css";

// class App extends Component {
    const App = () => {
  ReactDOM.render (
    // return (
        <div>
          <NavList navListContent={navListContent} />
          <main className="main">
            <JobsList
              jobsListContent={jobsListContent}
              navListContent={navListContent}
            />
            <EducationList
              educationListContent={educationListContent}
              navListContent={navListContent}
            />
          </main>
        </div>,
      document.getElementById("root")
    // );
)
    }
// }

export default App;
 */