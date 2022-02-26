import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ aboutMe, Component }) => {
    return (
        <section id="about-me" className='animate__animated animate__fadeIn'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3 mt-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://i.ibb.co/TDfYYfX/avatar.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{aboutMe.name} {aboutMe.lastname}</h5>
                                        <p className="card-text">
                                            {aboutMe.biography}
                                            <Component />
                                        </p>
                                        <p className="card-text">
                                            <ul className="list-group">
                                                {
                                                    aboutMe.rrss.map((rrss, index) => {
                                                        return (
                                                            <li className={"animate__animated animate__fadeInRight" + (index > 0 ? ` animate__delay-${index + 1}s ` : " ") + "list-group-item list-group-item-action"} key={index}>
                                                                {rrss.icon} <a href={rrss.url} target="_blank" rel="noreferrer">{rrss.text}</a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

AboutMe.propTypes = {
    aboutMe: PropTypes.object.isRequired,
    Component: PropTypes.func.isRequired
}

export default AboutMe;