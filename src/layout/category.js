import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Category = () => {
  useEffect(() => {
    const categoryCards = document.querySelectorAll('.cotegory-card');
    
    const timeline = gsap.timeline({ paused: true });

    categoryCards.forEach((card, index) => {
      const img = card.querySelector('.category-img img');
      const title = card.querySelector('.cat-title');

      timeline.fromTo(
        card, 
        { opacity: 0, x: -50 }, // Starting state
        { opacity: 1, x: 0, duration: 0.7 }, // Ending state
        index * 0.2
      ).fromTo(
        img, 
        { opacity: 0, y: '100%' }, 
        { opacity: 1, y: '0%', duration: 0.7 }, 
        `-=${0.5}`
      ).fromTo(
        title, 
        { opacity: 0, y: '100%' }, 
        { opacity: 1, y: '0%', duration: 0.5 }, 
        `-=${0.5}`);
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.0;

      if (scrollTop > triggerPoint) {
        timeline.play();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className='cotegory-section'>
         <div className='wrpper-container'>
             <div className='cotegory-row row'>
                  <div className='cotegory-card'>
                       <div className='category-img MS'>
                            <img src='/image/cat.png' />
                       </div>
                       <h5 className='playfair cat-title'>
                         Men’s T-Shirts
                       </h5>
                  </div>
                  <div className='cotegory-card'>
                       <div className='category-img WW'>
                            <img src='/image/cat1.png' />
                       </div>
                       <h5 className='playfair cat-title'>
                       Women’s Wear
                       </h5>
                  </div>
                  <div className='cotegory-card'>
                       <div className='category-img WC'>
                            <img src='/image/cat2.png' />
                       </div>
                       <h5 className='playfair cat-title'>
                       Winter Collections
                       </h5>
                  </div>
                  <div className='cotegory-card'>
                       <div className='category-img HTS'>
                            <img src='/image/cat3.png' />
                       </div>
                       <h5 className='playfair cat-title'>
                       Hooded T-Shirts
                       </h5>
                  </div>
                  <div className='cotegory-card'>
                       <div className='category-img PNTC'>
                            <img src='/image/cat4.png' />
                       </div>
                       <h5 className='playfair cat-title'>
                       Polo Neck T-Shirts
                       </h5>
                  </div>
                  <div className='cotegory-card'>
                       <div className='category-img FSTS'>
                            <img src='/image/cat5.png' />
                       </div>
                       <h5 className='playfair cat-title'>
                       Full Sleeves T-Shirts
                       </h5>
                  </div>
             </div>
         </div>
      </section>
    </>
  );
}

export default Category