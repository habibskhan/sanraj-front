import React, { useState, useEffect } from 'react';
import './customSlider.scss';
import { ctaBlackArrow } from '../../images';

const CustomSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % Math.ceil(slides.length / slidesPerView)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + Math.ceil(slides.length / slidesPerView)) % Math.ceil(slides.length / slidesPerView)
        );
    };

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 576) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 769) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        updateSlidesPerView(); // Call on mount
        window.addEventListener('resize', updateSlidesPerView); // Listen to resize events

        return () => window.removeEventListener('resize', updateSlidesPerView); // Clean up listener
    }, []);

    useEffect(() => {
        const slideWidth = 100 / slidesPerView;
        document.documentElement.style.setProperty('--slide-width', `${slideWidth}%`);
    }, [slidesPerView]);

    return (
        <div className="slider-container">
            <h2 className="slider-title">OUR ACHIEVEMENTS</h2>
            <div className="slider-content">
                <div
                    className="slider-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.image} alt={slide.title} />
                            <div className="content">
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="nav-button prev" onClick={prevSlide}>
                <img
                    src={ctaBlackArrow}
                    alt="arrow"
                    className="arrow_img"
                />
            </button>
            <button className="nav-button next" onClick={nextSlide}>
                <img
                    src={ctaBlackArrow}
                    alt="arrow"
                    className="arrow_img"
                />
            </button>
        </div>
    );
};

export default CustomSlider;
