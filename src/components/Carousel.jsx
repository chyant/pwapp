import React, {useState} from 'react'; //function from react

import "./Carousel.css"; //stylesheet
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"; //left and right button

export const Carousel = ({data}) =>{
    const [slide,setSlide] = useState(0); //inizialize slide 0

    const nextSlide = () =>{
        
        setSlide(slide === data.length - 1 ? 0 : slide+1)
    } //next slide functino

    const prevSlide = () =>{
        setSlide(slide === 0 ? data.length - 1 : slide-1)
    }//previous slide function
    //carousel html
    return <div className='carousel'> 
    <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
    {data.map((item,idx) =>{
            return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>}
        )}
        
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className='indicators'>
            {data.map((_,idx)=>{
                return <button key={idx} onClick={()=>setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>
        </div>
    
}
