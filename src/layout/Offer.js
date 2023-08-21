import React from 'react'

const Offer = () => {
  return (
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
                  <div className='offer-card'>
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
  )
}

export default Offer