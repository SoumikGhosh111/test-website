import React from 'react'
import "./MarqueeImages.css";
import star from "../../assets/star.svg"
import img1 from "../../assets/partner-01.svg";
import img2 from "../../assets/partner-02.svg";
import img3 from "../../assets/partner-03.svg";
import img4 from "../../assets/partner-04.svg";
import img5 from "../../assets/partner-05.svg"; 

function MarqueeImages() {
    return (
      <div className='marquee-images-wrapper'>
        <div className='marquee-images-body'>
          <div className='marquee-images-body-slide'>
            <img src={img1} alt='img1' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img2} alt='img2' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img3} alt='img3' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img4} alt='img4' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img5} alt='img5' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
          </div>
          <div className='marquee-images-body-slide'>
            <img src={img1} alt='img1' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img2} alt='img2' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img3} alt='img3' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img4} alt='img4' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img5} alt='img5' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
          </div>
  
          <div className='marquee-images-body-slide'>
            <img src={img1} alt='img1' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img2} alt='img2' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img3} alt='img3' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img4} alt='img4' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
            <img src={img5} alt='img5' className='mrqee-images-body-items' />
            <img src={star} alt='star' className='mrqee-images-body-items star' />
          </div>
  
  
        </div>
  
      </div>
    )
  }
  
  export default MarqueeImages