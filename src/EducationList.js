import React from 'react';
import Education from './Education';

const EducationList = ({ educationListContent, navListContent }) => {

    return (
        <section className="section" id={`section-${navListContent[0].listItem[1].replace(/\s/g, '')}`}>
            <h2 className="object__title">
                {navListContent[0].listItem[1]}
            </h2>
            {
                educationListContent.map((user, i) => {
                    return (
                        <div key={`Education ${i}`}>
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
        </section>
    );
}

export default EducationList;