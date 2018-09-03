import React from "react";
import scrollToComponent from "react-scroll-to-component";

const ScrollToElement = e => {
  console.log(e.target.id);
  const ScrollHere = document.getElementById("section-" + e.target.id);
  scrollToComponent(ScrollHere, {
    offset: -50,
    align: "top",
    ease: "outExpo",
    // ease:'inOutCube',
    duration: 1000
  });
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }

  ToggleHamburger = e => {
    this.setState({ isActive: !this.state.isActive });
  };

  ToggleMenu = e => {
    this.setState({ isActive: !this.state.isActive });
  };



  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg nav fixed-top">
        <a
          className={`hamburger hamburger--collapse js-hamburger ${this.state.isActive ? "" : "is-active"}`}
          onClick={this.ToggleHamburger}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </a>
        <div className="container">
          {/* <div className="row"> */}
            <div
              className={`collapse navbar-collapse nav__list-container ${this.state.isActive ? "" : "show"}`}
              onClick={this.ToggleMenu}
              id="nav-menu"
            >
              <ul className="navbar-nav nav__list d-flex justify-content-between">
                {this.props.listItem.map(item => {
                  return (
                    <li key={`Nav ${item}`} className="nav-item">
                      <a
                        onClick={ScrollToElement}
                        id={`${item.replace(/\s/g, "")}`}
                        className="nav-link"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            {/* </div> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
