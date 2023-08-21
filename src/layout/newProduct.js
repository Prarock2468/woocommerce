import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewProduct = () => {

  useEffect(() => {
    const categoryCards = document.querySelectorAll('.Trending-card');

    categoryCards.forEach((card, index) => {
      const title = card.querySelector('.trending-card-content-title ');
      const prize = card.querySelector('.card-prize');
      const sizeListItems = card.querySelectorAll('.size-list li');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });

      tl.fromTo(
        card,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.7 }
      )
      .fromTo(
        title,
        { opacity: 0, y: '-100%' },
        { opacity: 1, y: '0%', duration: 0.5 },
        `-=${0.5}`
      )
      .fromTo(
        prize,
        { opacity: 0, y: '-100%' },
        { opacity: 1, y: '0%', duration: 1 },
        `-=${0.5}`
      )
      .staggerFromTo(
        sizeListItems,
        1,
        { opacity: 0, y: '50%' },
        { opacity: 1, y: '0%' },
        0.3
      );
    });
  }, []);


  return (
    <section className='Trending-section featured-section' style={{"padding":"65px 0"}}>
    <div className='wrpper-container'>
      <div className='heading-box'>
        <div className='divider featured-divider'></div>
        <h3 className='Playfair'>New Products</h3>
      </div>
      <div className='Trending-row row'>
        <div className='Trending-card'>
          <div className='Trending-image'>
            <img src='/image/tshirt1.png' className='trending-img' />
            <div className='Trending-overlay'>
              <a href='#'>
                <img src='/image/icon/cartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/heartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/share.png' />
              </a>
            </div>
          </div>
          <div className='trending-card-content Montserrat'>
            <p className='trending-card-content-title Montserrat'>
              Men Henley Neck Full Sleeve Red Wine
            </p>
            <p className='card-prize Montserrat'>
              <strong>&#8377; 399</strong>
              <s>&#8377; 399</s>
            </p>
            <ul className='size-list Montserrat'>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
        </div>
        <div className='Trending-card'>
          <div className='Trending-image'>
            <img src='/image/tshirt1.png' className='trending-img' />
            <div className='Trending-overlay'>
              <a href='#'>
                <img src='/image/icon/cartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/heartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/share.png' />
              </a>
            </div>
          </div>
          <div className='trending-card-content Montserrat'>
            <p className='trending-card-content-title Montserrat'>
              Men Henley Neck Full Sleeve Red Wine
            </p>
            <p className='card-prize Montserrat'>
              <strong>&#8377; 399</strong>
              <s>&#8377; 399</s>
            </p>
            <ul className='size-list Montserrat'>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
        </div>
        <div className='Trending-card'>
          <div className='Trending-image'>
            <img src='/image/tshirt1.png' className='trending-img' />
            <div className='Trending-overlay'>
              <a href='#'>
                <img src='/image/icon/cartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/heartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/share.png' />
              </a>
            </div>
          </div>
          <div className='trending-card-content Montserrat'>
            <p className='trending-card-content-title Montserrat'>
              Men Henley Neck Full Sleeve Red Wine
            </p>
            <p className='card-prize Montserrat'>
              <strong>&#8377; 399</strong>
              <s>&#8377; 399</s>
            </p>
            <ul className='size-list Montserrat'>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
        </div>
        <div className='Trending-card'>
          <div className='Trending-image'>
            <img src='/image/tshirt1.png' className='trending-img' />
            <div className='Trending-overlay'>
              <a href='#'>
                <img src='/image/icon/cartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/heartcolor.png' />
              </a>
              <a href='#'>
                <img src='/image/icon/share.png' />
              </a>
            </div>
          </div>
          <div className='trending-card-content Montserrat'>
            <p className='trending-card-content-title Montserrat'>
              Men Henley Neck Full Sleeve Red Wine
            </p>
            <p className='card-prize Montserrat'>
              <strong>&#8377; 399</strong>
              <s>&#8377; 399</s>
            </p>
            <ul className='size-list Montserrat'>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='viwe-btn-box'>
         <a className='btn view-all-btn Montserrat' href='#'>View All</a>
      </div>
    </div>
  </section>
  )
}

export default NewProduct