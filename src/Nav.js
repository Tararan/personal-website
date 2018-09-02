import React from "react";
// import ReactDOM from "react-dom";
import "./Nav.css";
import scrollToComponent from 'react-scroll-to-component';

const HandleClick = (e) => {
    console.log(e.target.id);
      const ScrollHere = document.getElementById('section-' + e.target.id);
      scrollToComponent(ScrollHere, {
        offset: -40,
        align: 'top',
        duration: 1500
    });
/*     window.scrollTo({
      'top': ScrollHere.offsetTop, 
      'behavior': 'smooth'
    }); */
}

const Nav = ({ listItem }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg nav fixed-top">
      <div className="container">
        <div className="row">
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-menu"
            aria-controls="nav-menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav__list-container"
            id="nav-menu">
            <ul className="navbar-nav nav__list d-flex justify-content-between">
              {listItem.map(item => {
                return (
                  <li key={`Nav ${item}`} className="nav-item">
                    <a onClick={HandleClick} id={`${item.replace(/\s/g, '')}`} className="nav-link">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
