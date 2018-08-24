import React from 'react';
import './Object.css';

const Education = ({ employer, description, descriptionList1, descriptionList2, descriptionList3, descriptionList4, image }) => {
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
                                    <li>
                                        {descriptionList1}
                                    </li>

                                    <li>
                                        {descriptionList2}
                                    </li>

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
                <div className="object__bg svgblur" id="object__bg" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <svg className="object-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="blur80">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="70" />
                        </filter>
                    </defs>
                </svg>
            </section>
        </div >
    );
}

export default Education;
