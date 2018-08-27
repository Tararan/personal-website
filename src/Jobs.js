import React from "react";
import "./styles/App.scss";

const Jobs = ({ employer, description, descriptionList, image}) => {
  return (
    <div>
      <section className="object__container">
        <div className="container">
          <div className="object">
            <div className="row">
              <div className="col-sm-8">
                <h3 className="employer">{employer}</h3>
                <div className="description">{description}</div>
                <ul className="description-list">
                  {descriptionList.map(item => (
                    <li>{item}</li>
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
        </div>
        <div
          className="object__bg"
          style={{ backgroundImage: `url(${image})` }}
        />
      </section>
    </div>
  );
};

export default Jobs;
