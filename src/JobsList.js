import React from 'react';
import Jobs from './Jobs';

const JobsList = ({ jobsListContent }) => {
    return (
        <div className="main">
            {
                jobsListContent.map((user, i) => {
                    return (
                        <div>
                        <Jobs
                            id={jobsListContent[i].id}
                            employer={jobsListContent[i].employer}
                            description={jobsListContent[i].description}
                            descriptionList1={jobsListContent[i].descriptionList1}
                            descriptionList2={jobsListContent[i].descriptionList2}
                            descriptionList3={jobsListContent[i].descriptionList3}
                            descriptionList4={jobsListContent[i].descriptionList4}
                            image={jobsListContent[i].image}
                        />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default JobsList;