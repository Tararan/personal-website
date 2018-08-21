import React from 'react';
// import { content } from './content';
import Jobs from './Jobs';

const JobsList = ({ content }) => {
    return (
        <div>
            {
                content.map((user, i) => {
                    return (
                        <Jobs
                            id={content[i].id}
                            employer={content[i].employer}
                            description={content[i].description}
                            descriptionList1={content[i].descriptionList1}
                            descriptionList2={content[i].descriptionList2}
                            descriptionList3={content[i].descriptionList3}
                            descriptionList4={content[i].descriptionList4}
                            image={content[i].image}
                        />
                    );
                })
            }
        </div>
    );
}

export default JobsList;