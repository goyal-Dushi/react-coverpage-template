import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'

import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpg'
import c3 from '../assets/images/c3.jpg'

const reviews = [
    {   
        logo: c3,
        customer: 'Mark Dave - Teacher',
        review: 'From the telephone appointment system to seeing a GP, my experience has been flawless. All the team from reception, telephone and nursing staff are polite, thorough and cheerful, which in itself is comforting.'
    },
    {
        logo: c2,
        customer: 'John Doe - Business Men',
        review: `Medical Surgery in my opinion has to be one of the best in the area. I have never had a problem getting to see a doctor or getting through from the telephone. All the Doctors here are very good and considerate.`
    },
    {   
        logo: c1,
        customer: 'Jackina Doe - House Wife',
        review: `I'm simply extremely satisfied with the quality and level of care received from Medical Centre not only to myself, but also my children and an elderly relative. excellent work and honestly appreciated by us.`
    },
]
const CarouselModule = ({ }) => {
    return (
        <div className="carousel-container" id="reviews">
            <h2 className={"display-4"}>Our customer reviews</h2>

            <Carousel indicators>
                {reviews.map(({ customer, review, logo }) => (
                    <Carousel.Item>
                        <div className="item">
                            <div className="box">
                                <img src={logo} />
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