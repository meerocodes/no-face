import React, { useState, useRef, useEffect } from 'react';
import productImg1 from "../assets/productShot.jpg";
import productImg2 from "../assets/productShot2.jpg";

const CarouselModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);  // Add this line

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup when unmounting the component
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const images = [
        productImg1,
        productImg2,
        'https://via.placeholder.com/200x100?text=3'
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        carouselRef.current = touchStartX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;

        if (carouselRef.current - touchEndX > 50) {
            handleNextClick();
        } else if (carouselRef.current - touchEndX < -50) {
            handlePrevClick();
        }
    };

    const closeModal = (e) => {
        if (e.target === e.currentTarget) { // ensures we're clicking on the modal overlay
            setModalOpen(false);
        }
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='openCarousel'>GALLERY</button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <div className="carousel-container">
                            <button onClick={handlePrevClick} className='modalArrow'>&lt;</button>
                            <img
                                src={images[currentIndex]}
                                alt="carousel"
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            />
                            <button onClick={handleNextClick} className='modalArrow'>&gt;</button>
                        </div>
                        <button className="modal-close-button" onClick={() => setModalOpen(false)}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarouselModal;


