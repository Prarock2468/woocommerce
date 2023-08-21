import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Offer = () => {
  useEffect(() => {
    const offerCards = document.querySelectorAll('.offer-card');

    offerCards.forEach((card) => {
      const iconBox = card.querySelector('.offer-icon-box');
      const title = card.querySelector('.offer-title');
      const off = card.querySelector('.offer-Off');
      const sale = card.querySelector('.sale');
      const button = card.querySelector('.offer-btn');

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
        iconBox,
        { opacity: 0, x: '-50px' },
        {
          opacity: 1,
          x: '0',
          duration: 0.7,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        [title, off, sale],
        { opacity: 0, y: '50px' },
        {
          opacity: 1,
          y: '0',
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        button,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
    const supportCols = document.querySelectorAll('.support-col');

    supportCols.forEach((col, index) => {
      const content = col.querySelector('.support-content');
      const icon = content.querySelector('.support-icon');
      const title = content.querySelector('.support-title');

      gsap.fromTo(
        col,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: col,
            start: 'top 80%',
          },
        },
        index * 0.2 // Delay each card's animation by index * 0.2 seconds
      );

      gsap.fromTo(
        icon,
        { opacity: 0, y: '50px' },
        {
          opacity: 1,
          y: '0',
          duration: 0.7,
          scrollTrigger: {
            trigger: col,
            start: 'top 80%',
          },
        },
        index * 0.2
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: '50px' },
        {
          opacity: 1,
          y: '0',
          duration: 0.5,
          scrollTrigger: {
            trigger: col,
            start: 'top 80%',
          },
        },
        index * 0.2
      );
    });
  }, []);
  
  return (
   <>
   
   <section className='offer-section'>
         <div className='wrpper-container'>
              <div className='row offer-row'>
                  <div className='offer-card diamond'>
                     <div className='offer-icon-box'>
                        <img src='/image/icon/diamond.png' className='offer-icon'/> 
                      </div>
                      <p className='offer-title Playfair'>Hurry Up !</p>
                      <p className='offer-Off Playfair'>80% Off</p>
                      <p className='sale Playfair'>Sale</p>
                      <button className='offer-btn Montserrat'>SHOP NOW</button>
                  </div>
                  <div className='offer-card diamond2'>
                     <div className='offer-icon-box'>
                        <img src='/image/icon/discount.png' className='offer-icon'/>
                      </div>
                      <p className='offer-title Playfair'>Hurry Up !</p>
                      <p className='offer-Off Playfair'>80% Off</p>
                      <p className='sale Playfair'>Sale</p>
                      <button className='offer-btn Montserrat'>SHOP NOW</button>
                  </div>
              </div>
         </div>
    </section>
    <section className='support-section'>
             <div className='circle-suppor circle-left'></div>
             <div className='circle-suppor circle-right'></div>
            <div className='wrpper-container'>
                  <div className='support-row row'>
                       <div className='support-col support-col1'>
                            <div className='support-content'>
                                <img src='/image/icon/replacement.png' className='support-icon' />
                                <p className='Montserrat support-title'>7 Days Return</p>
                            </div>
                       </div>
                       <div className='support-col support-col2'>
                            <div className='support-content'>
                                <img src='/image/icon/prize.png' className='support-icon' />
                                <p className='Montserrat support-title'>Quality Products</p>
                            </div>
                       </div>
                       <div className='support-col support-col3'>
                            <div className='support-content'>
                                <img src='/image/icon/security.png' className='support-icon' />
                                <p className='Montserrat support-title'>Safe Payment</p>
                            </div>
                       </div>
                       <div className='support-col support-col4'>
                            <div className='support-content'>
                                <img src='/image/icon/call.png' className='support-icon' />
                                <p className='Montserrat support-title'>24x7 Helpline</p>
                            </div>
                       </div>
                  </div>
            </div>
    </section>
   
   
   </>
    
  )
}

export default Offer