import React from 'react';
import Social from './Social'; 

const SocialList = ({ socialListContent }) => {
    return (
        <div>
            {
                socialListContent.map((user, i) => {
                    return (
                        <Social key={`SocialList ${i}`}
                            linkIn={user.linkIn}
                            imgIn={user.imgIn}
                            
                            linkWapp={user.linkWapp}
                            imgWapp={user.imgWapp}
                            
                            linkInsta={user.linkInsta}
                            imgInsta={user.imgInsta}
                          
                            linkMail={user.linkMail}
                            imgMail={user.imgMail}
                        />
                    );
                })
            }
        </div>
    );
}

export default SocialList;