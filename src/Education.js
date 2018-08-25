import React from 'react';
import './styles/App.scss';

const Education = ({ employer, description, descriptionList, image }) => {
    return (
        <section className="object-container">
            <div className="container">
                <div className="object">
                    <div className="row">
                        <div className="col-sm-8">
                            <h3 className="employer">
                                {employer}
                            </h3>
                            <div className="description">
                                {description}
                            </div>
                            <ul className="description-list">
                                {descriptionList.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                        <div className="image-container">
                            <div className="col-sm-4">
                                <img className="image" src={image} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="object__bg" style={{ backgroundImage: `url(${image})` }}>
            </div>
        </section>
    );
}

export default Education;
