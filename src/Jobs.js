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
        {/*         <canvas className="object__bg" id="object__bg" style={{ backgroundImage: `url(${image})` }}>
                </canvas> */}
                <svg className="object-svg" preserveAspectRatio="none" >
                   <defs>
                        <filter id="f1" x="0" y="0">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
                         </filter>
                        </defs>
                          <image x="0" y="0" width="1000px" height="1000px" xlinkHref={image} filter="url(#f1)"/>
                          Sorry, your browser does not support inline SVG.  
                    </svg>
            </section >
        </div >
    );
}

export default Jobs;
