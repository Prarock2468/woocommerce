import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  useEffect(() => {
    const categoryCards = document.querySelectorAll('.collection-card');

    categoryCards.forEach((card, index) => {
      const img = card.querySelector('.collection-card img');
      const title = card.querySelector('.collection-text');

      gsap.fromTo(
        card,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        img,
        { opacity: 0, y: '100%' },
        {
          opacity: 1,
          y: '0%',
          duration: 0.7,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: '100%' },
        {
          opacity: 1,
          y: '0%',
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
    const addBannerImage = document.querySelector('.add-banner-1');

    gsap.fromTo(
      addBannerImage,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.collection-add-banner',
          start: 'top 80%',
        },
      }
    );
  }, []);
  return (
    <>

      <section className='collection-section'>
        <div className='wrpper-container'>

          <div className='collection-row row'>
            <div className='collection-card collection-card-4'>
              <img src='/image/collection3.png' />
              <h3 className='collection-text Playfair'>
                Streetwear Collections
              </h3>
            </div>
            <div className='collection-card collection-card-5'>
              <img src='/image/collection4.png' />
              <h3 className='collection-text Playfair'>
                Streetwear Collections
              </h3>
            </div>
            <div className='collection-card collection-card-6'>
              <img src='/image/collection5.png' />
              <h3 className='collection-text Playfair'>
                Streetwear Collections
              </h3>
            </div>
            <div className='collection-card collection-card-1'>
              <img src='/image/collection.png' />
              <h3 className='collection-text Playfair'>
                Streetwear Collections
              </h3>
            </div>
            <div className='collection-card collection-card-2'>
              <img src='/image/collection1.png' />
              <h3 className='collection-text Playfair'>
                Streetwear Collections
              </h3>
            </div>
            <div className='collection-card collection-card-3'>
              <img src='/image/collection2.png' />
              <h3 className='collection-text Playfair'>
                Streetwear Collections
              </h3>
            </div>

          </div>

        </div>
      </section>

      <section className='collection-add-banner'>
         <img src='/image/addbanner2.png' className='add-banner-1' />
      </section>

    </>
  )

}

export default Collection