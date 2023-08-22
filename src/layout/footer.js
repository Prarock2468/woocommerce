import React from 'react'

const Footer = () => {
  return (
    <>

      <section className='footer'>
        <div className='wrpper-container'>
          <div className=' row footer-row'>
            <div className='footer-col-first footer-col footer-col-1'>
              <div className='footer-1-content'>
                <p className='Montserrat content-fText'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
                </p>
                <ul className='social-list'>
                  <li>
                    <a href="#" target="_blank">
                      <img src='/image/icon/facebook.png' />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src='/image/icon/twitter.png' />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src='/image/icon/instagram.png' />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src='/image/icon/linkedin.png' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer-col footer-col-2'>
              <div className='footer-content'>
                <h3 className='footer-title Playfair'>ONLINE SHOPPING</h3>
                <ul className='footer-ul Montserrat'>
                  <li>
                    <a href='#' className='f-link'>Men’s T-Shirts</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Women’s Wear</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Winter Collections</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Hooded T-Shirts</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Streetwear Collections</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer-col footer-col-3'>
              <div className='footer-content'>
                <h3 className='footer-title Playfair'>CUSTOMER POLICIES</h3>
                <ul className='footer-ul Montserrat'>
                  <li>
                    <a href='#' className='f-link'>About Us</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Shipping & Returns Policy</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Cancellation & Refund Policy</a>
                  </li>
                  <li>
                    <a href='#' className='f-link'>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer-col footer-col-4'>
              <div className='footer-content'>
                <h3 className='footer-title Playfair'>STORE INFORMATION</h3>
                <ul className='footer-ul Montserrat address-ul'>
                  <li>
                    <a href='#' className='f-link address'>
                      <img src="/image/icon/contact3.png" height={22} />
                      <span>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='tel:1234567890' className='f-link address'>
                      <img src="/image/icon/contact3.png" height={22} />
                      <span>Call Us: 1234567890</span>
                    </a>
                  </li>
                  <li>
                    <a href='mailto:info@yourmail.com' className='f-link address'>
                      <img src="/image/icon/contact.png" height={22} />
                      <span>Email Us: info@yourmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >

    </>
  )
}

export default Footer