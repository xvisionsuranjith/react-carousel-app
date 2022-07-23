import React, {useState, useEffect} from 'react';
import './Carousel.css';
import BtnSlider from './BtnCarousel';
import PropTypes from 'prop-types';

export default function Carousel(props) {

    const [slideIndex, setSlideIndex] = useState(1)
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3600/api/carousel?slides=${+props.Slides}`)
          .then((response) => response.json())
          .then((data) => {
            setSliderData(data);

            // if (+props.Infinite) {
            let timer1 = setTimeout(() => {
                    // setSlideIndex(slideIndex + 1);
                    // if (slideIndex <= data.length) {
                    //     moveDot(slideIndex)
                    // }
                    console.log('auto slide')
             }, 500)
            // }

            // return () => {
            //     clearTimeout(timer1)
            // }

          });
      }, [props.Slides]);

    const nextSlide = () => {
        if(slideIndex !== sliderData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === sliderData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(sliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const BASE_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

    return (
        <div className={"container-slider"}>
            {sliderData.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={BASE_URL + `/Imgs/img${index + 1}.jpg`} alt="slide"
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {sliderData.map((item, index) => (
                    <div
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}>
                    </div>
                ))}
            </div>
        </div>
    )
}

Carousel.propTypes = {
    Slides: PropTypes.string.isRequired,
    Infinite: PropTypes.string.isRequired,
};
