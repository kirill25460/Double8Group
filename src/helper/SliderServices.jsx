import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from './Modal';
import { ImgSlide } from './SliderServices.styled';
// import { height, width } from '@mui/system';

export const SliderServices = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleCloseClick = () => {
        onClose();
    };


    return (
        <Modal onClose={handleCloseClick}>
            <Carousel selectedItem={currentSlide} onChange={setCurrentSlide} showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <ImgSlide src={image.url} alt={`Service ${index}`}/>
                    </div>
                ))}
            </Carousel>
        </Modal>
    );
}
