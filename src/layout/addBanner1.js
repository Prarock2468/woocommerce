import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const AddBanner1 = () => {

  useEffect(() => {
    // Animation for Add Content Title
    
    gsap.fromTo(
      '.add-content-title',
      { opacity: 0, y: '-10px' },
      {
        opacity: 1,
        y: '0',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.add-content-title',
          start: 'top 80%',
        },
      }
    );

    // Animation for Add Text
    gsap.fromTo(
      '.add-text',
      { opacity: 0, x: '-10px' },
      {
        opacity: 1,
        x: '0',
        duration: 1,
        scrollTrigger: {
          trigger: '.add-text',
          start: 'top 80%',
        },
      }
    );

    // Animation for Montserrat Grab Button
    gsap.fromTo(
      '.brab-btn',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.Montserrat-brab-btn',
          start: 'top 80%',
        },
      }
    );

    // Animation for Add Image
    gsap.fromTo(
      '.add-img',
      { height: 0 },
      {
        height: '500px',
        duration: 1,
        scrollTrigger: {
          trigger: '.add-img',
          start: 'top 80%',
        },
      }
    );
  }, []);
  return (
   <>
   
   <section className='add-banner-section'>
         <div className='wrpper-container'>
              <div className='add-content'>
                   <div className='add-content-in'>
                       <div className='rectengle1'></div>
                       <div className='rectengle2'></div>
                       <div className='content-add'> 
                            <h2 className='Montserrat add-content-title'>Let The Fashion</h2>
                            <p className='Script add-text'>Speep your Personility</p>
                            <a href="#" className='Montserrat brab-btn'>GRAB IT TODAY</a>
                       </div>
                   </div>
              </div>
              <div className='add-image'>
                  <img src='/image/addbanner1.png' className='add-img' height={500}/>
              </div>
         </div>
   </section>
   
   </>
  )
}

export default AddBanner1