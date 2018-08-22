import React from 'react';
import './Jobs.css';

const Jobs = ({ employer, description, descriptionList1, descriptionList2, descriptionList3, descriptionList4, image }) => {
    return (
        <div>
            <section className="job-object-container">
                <div className="container">
                    <div className="job-object">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2 className="employer">
                                    {employer}
                                </h2>
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
                <div className="job-object__bg" style={{ backgroundImage: `url(${image})` }}></div>
            </section>
        </div >
    );
}

export default Jobs;
