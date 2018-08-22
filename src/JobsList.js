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
                        
                            // descriptionList={jobsListContent[i].descriptionList}
                            descriptionList1={<li>{jobsListContent[i].descriptionList1}</li>}
                            descriptionList2={<li>{jobsListContent[i].descriptionList2}</li>}
                            descriptionList3={<li>{jobsListContent[i].descriptionList3}</li>}
                            descriptionList4={<li>{jobsListContent[i].descriptionList4}</li>}
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