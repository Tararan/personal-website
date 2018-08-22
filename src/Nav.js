import React from 'react';
import './Nav.css';

const Nav = ({ listItem1, listItem2, listItem3, listItem4 }) => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark nav fixed-top">
                <div className="container">
                    <div className="row">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav__list-container " id="nav-menu">
                            <ul className="navbar-nav nav__list d-flex justify-content-between">
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {listItem1}
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link">
                                        {listItem2}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {listItem3}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {listItem4}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;