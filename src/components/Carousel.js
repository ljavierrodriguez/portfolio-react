import React from 'react';

const Carousel = ({ contentCarousel }) => {
    return (
        <section id="header">
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div
                            id="header-carousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {
                                    contentCarousel.length > 0 &&
                                    contentCarousel.map((item, index) => {
                                        return (
                                            <div className={"carousel-item" + (index === 0 ? " active" : "")} key={index}>
                                                <img src={item} className="d-block w-100" alt="..." />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#header-carousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#header-carousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel;