import Carousel from 'react-bootstrap/Carousel';
import React from "react";
function carousel() {
    return (
        <div>
            <Carousel  slide >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./one.webp"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./two.webp"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./three.webp"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default carousel;