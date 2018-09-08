import React from "react";
import Fade from "react-reveal/Fade";
import "./styles/App.scss";

const Jobs = ({ employer, description, descriptionList, image, imgDomain }) => {
  return (
    <section className="object__container">
      <div className="container">
        <Fade>
          <div className="object">
            <div className="row">
              <div className="col-xl-8 col-md-12">
                <h3 className="object__employer">{employer}</h3>
                <div className="object__description">{description}</div>
                <ul className="object__description-list">
                  {descriptionList.map((item, i) => (
                    <li key={`Jobs ${item}${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-4 col-md-12">
                <div className="object__image-container">
                  <img
                    className="object__image"
                    src={`${imgDomain}${image.replace(/\s/g, '')}`}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade>
        <div
          className="object__bg"
          style={{
            backgroundImage: `url(${imgDomain}c_scale,q_9,w_10/${image.replace(/\s/g, '')})`
          }}
        />
      </Fade>
    </section>
  );
};

export default Jobs;