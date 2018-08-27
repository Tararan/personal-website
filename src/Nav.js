import React from "react";
import "./Nav.css";

constructor(props) {
  super(props);
  this.object2 = React.createRef();
}

handleScrollToElement(event) {
    window.scrollTo(0, this.myRef);
}


const Nav = ({ listItem }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg nav fixed-top">
      <div className="container">
        <div className="row">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-menu"
            aria-controls="nav-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse nav__list-container "
            id="nav-menu"
          >
            <ul className="navbar-nav nav__list d-flex justify-content-between">
              {listItem.map(item => {
                return (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={handleScrollToElement}
                    >
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
};

export default Nav;
/*  eslint-disable  */
{
  /* 
    <button
  onClick={() =>
    scrollToComponent(this.Violet, { offset: 0, align: "top", duration: 1500 })
  }
>
  Go To Violet
</button>;
 */

  // onClick="$('.main').animate({scrollTop: $('#object2').offset().top}, 2000);"
}
/*  eslint-enable  */
