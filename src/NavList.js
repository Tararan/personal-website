import React from 'react';
import Nav from './Nav'; 

const NavList = ({ navListItems }) => {
    return (
        <div>
            {
                navListItems.map((user, i) => {
                    return (
                        <Nav
                            listItem1={navListItems[i].listItem1}
                            listItem2={navListItems[i].listItem2}
                            listItem3={navListItems[i].listItem3}
                            listItem4={navListItems[i].listItem4}
                        />
                    );
                })
            }
        </div>
    );
}

export default NavList;