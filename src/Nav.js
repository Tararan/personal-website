import React from 'react';
import './Nav.css';

const Nav = ({ listItem }) => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg nav fixed-top">
                <div className="container">
                    <div className="row">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav__list-container " id="nav-menu">
                            <ul className="navbar-nav nav__list d-flex justify-content-between">
                                { listItem.map((item) => {
                                    return (
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                {item}
                                            </a>
                                        </li>
                                    );
                                }) }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;