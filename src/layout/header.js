import React, { useState,useEffect } from 'react'
import gsap from 'gsap';
const Header = () => {
  const [isActive, setIsActive] = useState(false);  

  const toggleClass = () => {
    setIsActive(prevState => !prevState); 
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use a conditional class based on the isActive state
  const buttonClass = isActive ? 'active-button' : 'inactive-button';
  return (
    <>
    
     <section className='hero-section'>
            <header className={`header ${isScrolled ? 'fixed' : ''}`}>
                 <div className='wrpper-container'>
                      <div className='header-wrapper'>
                          <nav>
                            <div className={`${buttonClass} humburger`} onClick={toggleClass}>
                                 <span className='humburger-span humburger-span-1'></span>
                                 <span className='humburger-span humburger-span-2'></span>
                                 <span className='humburger-span humburger-span-3'></span>
                            </div>
                            <a href='/' className='brand Playfair' >Logo Here</a>
                            <ul className='feature-header-ul'>
                                <li className='feature-ul-item'>
                                  <a href='#'>
                                    <img src='/image/icon/search.png' />
                                  </a>
                                </li>
                                <li className='feature-ul-item'>
                                  <a href='#'>
                                    <img src='/image/icon/like.png' />
                                  </a>
                                </li>
                                <li className='feature-ul-item'>
                                  <a href='#'>
                                    <img src='/image/icon/cart.png' />
                                  </a>
                                </li>
                                <li className='feature-ul-item'>
                                  <a href='#'>
                                    <img src='/image/icon/user.png' />
                                  </a>
                                </li>
                            </ul>
                          </nav>
                      </div>
                 </div>
            </header>

            <div className='hero-banner'>
              <img src='/image/heroBanner.png' />
            </div>
     </section>
    
    </>
  )
}

export default Header