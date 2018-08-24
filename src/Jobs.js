import React from 'react';
import './Object.css';

const Jobs = ({ employer, description, descriptionList, image }) => {
    return (
        <div>
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
                <div className="object__bg" style={{ backgroundImage: `url(${image})`, filter: 'blur(180px) saturate(2) hue-rotate(0deg)' }}>
                </div>
                <div className="object__bg object__bg--hue-rotate" style={{ backgroundImage: `url(${image})`, filter: 'blur(180px) saturate(3) hue-rotate(180deg)' }}>
                </div>
            </section>
        </div>
    );
}

export default Jobs;
