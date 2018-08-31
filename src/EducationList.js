import React from 'react';
import Education from './Education';                                                         

const EducationList = ({ educationListContent, navListContent }) => {
    return (
        <div id={`${navListContent[0].listItem[1].replace(/\s/g, '')}`}>
            <h2 class="object__title">
                {navListContent[0].listItem[1]}
            </h2>
            {
                educationListContent.map((user, i) => {
                    return (
                        <div>
                            <Education
                                id={user.id}
                                employer={user.employer}
                                description={user.description}
                                descriptionList={user.descriptionList}
                                image={user.image}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default EducationList;