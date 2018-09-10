import React from 'react';
import Volunteering from './Volunteering';

const VolunteeringList = ({ volunteeringListContent, navListContent }) => {
    return (
        <section className="section" id={`section-${navListContent[0].listItem[1].replace(/\s/g, '')}`}>
            <h2 className="object__title">
                <p>{navListContent[0].listItem[1]}</p>
                <div className="object__title-bg" style={{ backgroundImage: `url(${volunteeringListContent[0].image}&auto=format&fit=crop&w=20&q=1})` }} ></div>
            </h2>
            {volunteeringListContent.map((user, i) => {
                    return (
                        <div key={`Volunteering ${i}`}>
                            <Volunteering
                                employer={user.employer}
                                description={user.description}
                                descriptionList={user.descriptionList}
                                imgDomain={user.imgDomain}
                                image={user.image}
                            />
                        </div>
                    );
                })
            }
        </section>
    );
}

export default VolunteeringList;