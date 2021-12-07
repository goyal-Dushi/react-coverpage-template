import React from 'react'
import { Carousel } from 'react-bootstrap'
import './userReviews.css'

import reviews from '../data/userReviews.json'

const CarouselModule = ({ }) => {
    return (
        <div className="carousel-container" id="reviews">
            <h2 className={"display-4"}>Our customer reviews</h2>

            <Carousel indicators>
                {reviews.map(({ customer, review, logo }) => (
                    <Carousel.Item>
                        <div className="item">
                            <div className="box">
                                <img src={`assets/images/${logo}.webp`} />
                                <p>{review}</p>
                                <br />
                                <p>{customer}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselModule