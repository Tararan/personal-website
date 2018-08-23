import React from 'react';
import Nav from './Nav'; 

const NavList = ({ navListContent }) => {
    return (
        <div>
            {
                navListContent.map((user, i) => {
                    return (
                        <Nav
                            listItem={user.listItem}
                        />
                    );
                })
            }
        </div>
    );
}

export default NavList;