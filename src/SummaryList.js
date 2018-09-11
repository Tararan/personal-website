import React from 'react';
import Summary from './Summary';

const SummaryList = ({ summaryListContent, navListContent }) => {
    return (
        <section className="section" id={`section-${navListContent[0].listItem[0].replace(/\s/g, '')}`}>
            <h2 className="object__title">
                <p>{navListContent[0].listItem[0]}</p>
                <div className="object__title-bg" style={{ backgroundImage: `url(${summaryListContent[0].imgDomain}c_scale,q_20,w_10/${summaryListContent[0].image.replace(/\s/g, '')})` }} ></div>
            </h2>
            {summaryListContent.map((user, i) => {
                    return (
                        <div key={`Summary ${i}`}>
                            <Summary
                                employer={user.employer}
                                description={user.description}
                                descriptionList={user.descriptionList}
                                imgDomain={user.imgDomain}
                                image={user.image}
                            />
                        </div>
                    );
                })
            }
        </section>
    );
}

export default SummaryList;