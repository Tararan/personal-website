import React from 'react';
import './Object.css';

const Jobs = ({ employer, description, descriptionList, descriptionList1, descriptionList2, descriptionList3, descriptionList4, image }) => {
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
                                    {/* <li className="description-list-item"> */}
                                        {descriptionList}
                                        {descriptionList1}
                                    {/* </li> */}
                                    {/* <li className="description-list-item"> */}
                                        {descriptionList2}
                                    {/* </li> */}
                                    {/* <li className="description-list-item"> */}
                                        {descriptionList3}
                                    {/* </li> */}
                                    {/* <li className="description-list-item"> */}
                                        {descriptionList4}
                                    {/* </li> */}

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
                <div className="object__bg" style={{ backgroundImage: `url(${image})` }}></div>
            </section>
        </div >
    );
}

export default Jobs;
