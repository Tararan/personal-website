import React from "react";
import Jobs from "./Jobs";

const JobsList = ({ jobsListContent, navListContent }) => {
  return (
    <div className="main">
      <h2 class="object__title">
        {navListContent[0].listItem[0]}
      </h2>
      {jobsListContent.map((user, i) => {
        return (
          <div>
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
    </div>
  );
};

export default JobsList;
