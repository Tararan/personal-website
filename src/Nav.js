import React from 'react';
import './Nav.css';

const Nav = ({ listItem1, listItem2,listItem3, listItem4 }) => {
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="row">
                        <ul>
                            <li>
                                <a>
                                   {listItem1} 
                                </a>
                            </li>
                            
                            <li>
                                <a>
                                   {listItem2} 
                                </a>
                            </li>
                            <li>
                                <a>
                                   {listItem3} 
                                </a>
                            </li>
                            <li>
                                <a>
                                   {listItem4} 
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;