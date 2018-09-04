import React from "react";
import Fade from "react-reveal/Fade";
// import Fade from "react-reveal/Fade";
import "./styles/App.scss";

const Education = ({ employer, description, descriptionList, image }) => {
  return (
    <section className="object__container">
      <div className="container">
        <Fade>
          <div className="object">
            <div className="row">
              <div className="col-sm-8">
                <h3 className="employer">{employer}</h3>
                <div className="description">{description}</div>
                <ul className="description-list">
                  {descriptionList.map((item, i) => (
                    <li key={`Nav ${item}${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-4">
                <div className="object__image-container">
                  <img className="object__image" src={image} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade>
        <div
          className="object__bg"
          style={{ backgroundImage: `url(${image})` }}
        />
      </Fade>
    </section>
  );
};

export default Education;
