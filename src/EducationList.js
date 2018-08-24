import React from 'react';
import Education from './Education';

const EducationList = ({ educationListContent }) => {
    return (
        <div className="main">
        <h2 class="object__title">
        Section 1
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