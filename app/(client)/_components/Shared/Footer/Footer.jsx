import React from 'react'
import Link from 'next/link'
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

import { MdMarkEmailUnread } from 'react-icons/md'

import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <section>
      <footer className='footer__container footer__gradient__color'>
        <div>
          <div className='footer__parent'>
            {/* Main Footer Content */}
            <div className='footer__child__parent '>
              {/* c */}
              <div className=''>
                {/* Social Media and Copyright */}
                <div className='space-y-5'>
                  <div>
                    <div>
                      <Image
                        height={1000}
                        width={1000}
                        alt='logo'
                        src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png'
                        className='object-cover w-48 h-auto  '
                      />
                    </div>
                  </div>
                  <p className='base__para'>
                    Not all companies benefit the same amount from social
                    media/SEO. However social media is a new way for companies
                  </p>

                  <div className='footer__icons__parent'>
                    <div>
                      <Image
                        src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/footer/awebp.webp'
                        height={800}
                        width={800}
                        alt='footer logo'
                        className='object-cover '
                      />
                    </div>
                    <div>
                      <Image
                        src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/footer/play.webp'
                        height={800}
                        width={800}
                        alt='play '
                        className='object-cover '
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 1 - Useful Links */}
              <div>
                <h3 className='footer__menu'>Useful Links</h3>
                <ul className='space-y-2 md:space-y-2.5 lg:space-y-3'>
                  <li>
                    <Link href='/about' className='footer__para'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact' className='footer__para'>
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link href='/blog' className='footer__para'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href='/team' className='footer__para'>
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href='/learning' className='footer__para'>
                      Learning Portal
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 - Courses */}
              <div>
                <h3 className='footer__menu'>Courses</h3>
                <ul className='space-y-2 md:space-y-2.5 lg:space-y-3'>
                  <li>
                    <Link
                      href='/courses/investment-banking'
                      className='footer__para'
                    >
                      Investment Banking Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/courses/financial-modeling'
                      className='footer__para'
                    >
                      Financial Modeling Course
                    </Link>
                  </li>
                  <li>
                    <Link href='/courses/frm-prep' className='footer__para'>
                      FRM Prep Course
                    </Link>
                  </li>
                  <li>
                    <Link href='/courses/cfa-prep' className='footer__para'>
                      CFA Prep Course
                    </Link>
                  </li>
                  <li>
                    <Link href='/courses/acca-prep' className='footer__para'>
                      ACCA Prep Course
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Reach Us */}
              <div>
                <h3 className='footer__menu'>Reach Us</h3>
                <div className='space-y-2 md:space-y-2.5 lg:space-y-3'>
                  <div className='footer__last__col__icon__parent'>
                    <FaPhone className='text-gray-600 text-lg' />
                    <span className='footer__para'>+91-7303381314</span>
                  </div>
                  <div className='footer__last__col__icon__parent'>
                    <FaWhatsapp className='text-gray-600 text-lg' />
                    <span className='footer__para'>+91-5603381314</span>
                  </div>
                  <div className='footer__last__col__icon__parent'>
                    <FaEnvelope className='text-gray-600 text-lg' />
                    <span className='footer__para'>info@xyz.com</span>
                  </div>
                  <div className='footer__last__col__icon__parent'>
                    <FaLocationDot className='text-gray-600 text-xl ' />
                    <span className='footer__para'>
                      2/3, Block 2, West street, New Dhaka - 110008
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 className='text-sm  text-right py-2 max-w-7xl mx-auto'>
            © {year}.{' '}
            <a href='https://www.ethicalden.com/' target='_blank'>
              <span className='font-semibold text-[#4483b8]'>Ethical Den</span>
            </a>{' '}
            All rights reserved.
          </h4>
        </div>
      </footer>

      {/* fixed footer */}
      <div className=''>
        <div className='fixed bottom-0 w-full bg-green-100 z-50'>
          <div className='max-w-7xl mx-auto  hidden xl:block  '>
            <div className=' flex justify-between items-center py-2.5'>
              <div className='fixed__footer__card_parent'>
                {/* Phone Number Display */}
                <div className='footer__icons__parent'>
                  <FaPhone className='text-gray-600 text-lg' />
                  <span className='sub__para'>+88015900-10592</span>
                </div>

                <div className='footer__icons__parent'>
                  <MdMarkEmailUnread className='text-gray-600 text-lg' />
                  <span className='sub__para'>info@gmail.com</span>
                </div>
              </div>

              <div className='fixed__footer__card_parent'>
                {/* WhatsApp Button */}
                <div>
                  <a
                    href={`https://wa.me/917303381314`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-x-3  text-black'
                  >
                    <FaWhatsapp className='text-lg text-gray-600' />
                    <span className='sub__para'>WhatsApp Us</span>
                  </a>
                </div>
                <div className='footer__icons__parent'>
                  <FaInstagram className='text-gray-600 text-lg' />
                  <span className='sub__para'>Instragram</span>
                </div>
                <div className='footer__icons__parent'>
                  <FaLinkedin className='text-gray-600 text-lg' />
                  <span className='sub__para'>Linkedin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
