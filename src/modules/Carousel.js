import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'

const reviews = [
    {
        customer: 'Mark Dave - Teacher',
        review: 'From the telephone appointment system to seeing a GP, my experience has been flawless. All the team from reception, telephone and nursing staff are polite, thorough and cheerful, which in itself is comforting.'
    },
    {
        customer: 'John Doe - Business Men',
        review: `Medical Surgery in my opinion has to be one of the best in the area. I have never had a problem getting to see a doctor or getting through from the telephone. All the Doctors here are very good and very considerate
        and more importantly very efficient .`
    },
    {
        customer: 'Jackina Doe - House Wife',
        review: `I'm simply extremely satisfied with the quality and level of care received from Medical Centre not only to myself, but also my children and an elderly relative. excellent work`
    },
]
const CarouselModule = ({ }) => {
    return (
        <div className="carousel-container">
            <h5>- REVIEWS -</h5>
            <h3>Read what our past patients said
                about our medical center.</h3>

            <Carousel>
                {reviews.map(({ customer, review }) => (
                    <Carousel.Item>
                        <div className="item">
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-1.png" />
                            <p>{review}</p>
                            <br />
                            <p>{customer}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselModule