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
                <canvas className="object__bg" id="object__bg" style={{ backgroundImage: `url(${image})` }}></canvas>
                {/* {canvas.getContext('2d').filter = 'blur(5px) opacity(0.6)'; */}
                {/* <div className="object__bg" style={{ backgroundImage: `url(${image})` }}></div> */}

            </section>
        </div >
    );
}

export default Jobs;
