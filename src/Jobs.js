import React from 'react';
import './Jobs.css';

const Jobs = ({ employer, description, descriptionList1, descriptionList2, descriptionList3, descriptionList4, image }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-">
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
                    <div className="col-sm-4">
                        <img className="image" src={image} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;
