import React, {useState} from 'react'
import carouselData from './CarouselData'
import './Carousel.css'
import BtnSlider from './BtnSlider'

function Carousel() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== carouselData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === carouselData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(carouselData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className='container-slider'>
            {carouselData.map((obj, index) =>{
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                        <img src={process.env.PUBLIC_URL + `/Images/img${index + 1}.jpg`} alt='pictures'/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
                </div>
        </div>
    )
}

export default Carousel