import React from 'react';
import './carousel.css'

function Carousel() {
    return (

        <div id="carouselExampleIndicators" className="carousel slide carousel-container" data-bs-ride="true">

            <div className="carousel-inner">

                <div className="carousel-item active card-carousel-custom" data-bs-interval='4000'>
                    <img src="" className="d-block  groupon-carousel " alt="Groupon" />
                    <h3 className='carousel-text'>We found in Wazuh the most complete security platform. We were seeking an open source SIEM solution that allowed scalability and integration with other tools, which made Wazuh the perfect fit. We achieved our goal, and in addition, we improved the visibility of our environment with the Wazuh monitoring options.</h3>
                    <h4 className='carousel-name'>Martin Petracca, IT Security Manager</h4>
                    <img className='quotation-marks' />
                </div>

                <div className="carousel-item card-carousel-custom" data-bs-interval='4000'>
                    <img src="" className="d-block woop-carousel" alt="Woop" />
                    <h3 className='carousel-text'>In addition to great advantage of being an open source platform, Wazuh is also easy to deploy, and its multiple capabilities have allowed us to achieve our goal with security at Woop. Wazuh is a unique tool and it's perfect for startups like Woop that are looking for top security at a competitive cost.</h3>
                    <h4 className='carousel-name'>Haithem Souala, Site Reliability Engineer</h4>
                    <img className='quotation-marks' />
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
        </div>



    )
}

export default Carousel
