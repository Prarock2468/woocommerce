import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Offer1 = () => {
    useEffect(() => {
        const offerImages = document.querySelectorAll('.offer1-image');
    
        offerImages.forEach((image, index) => {
          const img = image.querySelector('img');
    
          gsap.fromTo(
            img,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              scrollTrigger: {
                trigger: image, // Use the image element as the trigger
                start: 'top 80%', // Adjust as needed
              },
            }
          );
        });
      }, []);
    return (
        <section className='offer1-section'>
            <div className='wrpper-container'>
                <div className='offer1-row row'>
                    <div className='offer1-image image1'>
                        <img src='/image/image1.png' />
                    </div>
                    <div className='offer1-image image2'>
                        <img src='/image/image2.png' />
                    </div>
                    <div className='offer1-image image3'>
                        <img src='/image/image3.png' />
                    </div>
                    <div className='offer1-image image4'>
                        <img src='/image/image4.png' />
                    </div>
                    <div className='offer1-image image5'>
                        <img src='/image/image5.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer1