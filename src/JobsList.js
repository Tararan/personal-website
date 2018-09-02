import React from "react";
import Jobs from "./Jobs";

const JobsList = ({ jobsListContent, navListContent }) => {
  return (
    <section className="section" id={`section-${navListContent[0].listItem[0].replace(/\s/g, '')}`}>
      <h2 className="object__title">
        {navListContent[0].listItem[0]}
      </h2>
      {jobsListContent.map((user, i) => {
        return (
          <div key={`Jobs ${i}`}>
            <Jobs
              id={user.id}
              employer={user.employer}
              description={user.description}
              descriptionList={user.descriptionList}
              image={user.image}
            />
          </div>
        );
      })}
    </section>
  );
};

export default JobsList;  
