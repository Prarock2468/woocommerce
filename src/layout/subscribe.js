import React from 'react'

const subscribe = () => {
  return (
    <section className='Subscribe-section'>
         <div className='wrpper-container'>
              <div className='subscribe-wrapper'>
                 <h4>Subscribe to get updates on exciting offers & deals</h4>
                 <form className='subscribe-form'>
                      <input type='email' required className='form-control' name='email' placeholder='Enter your Email' />
                      <button className='Subscribe-btn'>Subscribe</button>
                 </form>
              </div>
         </div>
    </section>
  )
}

export default subscribe