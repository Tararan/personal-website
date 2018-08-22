import React from 'react';
import Nav from './Nav'; 

const NavList = ({ navListContent }) => {
    return (
        <div>
            {
                navListContent.map((user, i) => {
                    return (
                        <Nav
                            listItem1={navListContent[i].listItem1}
                            listItem2={navListContent[i].listItem2}
                            listItem3={navListContent[i].listItem3}
                            listItem4={navListContent[i].listItem4}
                        />
                    );
                })
            }
        </div>
    );
}

export default NavList;