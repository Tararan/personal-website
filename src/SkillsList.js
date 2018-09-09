import React from "react";
import Skills from "./Skills";

const SkillsList = ({ skillsListContent, navListContent }) => {
  return (
    <section className="section" id={`section-${navListContent[0].listItem[1].replace(/\s/g, '')}`}>
      <h2 className="object__title">
        <p>{navListContent[0].listItem[1]}</p>
        <div className="object__title-bg" style={{ backgroundImage: `url(${skillsListContent[0].imgDomain}c_scale,q_20,w_10/${skillsListContent[0].image.replace(/\s/g, '')})` }} ></div>
      </h2>
      {skillsListContent.map((user, i) => {
        return (
          <div key={`Skills ${i}`}>
            <Skills
              employer={user.employer}
              description={user.description}
              descriptionList={user.descriptionList}
              imgDomain={user.imgDomain}
              image={user.image}
            />
          </div>
        );
      })}
    </section>
  );
};

export default SkillsList;  
