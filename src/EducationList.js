import React from 'react';
import Education from './Education';

const EducationList = ({ educationListContent }) => {
    return (
        <div className="main">
            {
                educationListContent.map((user, i) => {
                    return (
                        <div>
                        <Education
                            id={educationListContent[i].id}
                            employer={educationListContent[i].employer}
                            description={educationListContent[i].description}
                            descriptionList1={educationListContent[i].descriptionList1}
                            descriptionList2={educationListContent[i].descriptionList2}
                            descriptionList3={educationListContent[i].descriptionList3}
                            descriptionList4={educationListContent[i].descriptionList4}
                            image={educationListContent[i].image}
                        />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default EducationList;