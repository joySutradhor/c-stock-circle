'use client'
import React from 'react'
import BaseBtn from '../utilities/BaseBtn'
import { MdArrowOutward } from 'react-icons/md'

export default function ContactForm () {
  return (
    <section className='w-full section__top'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-16 px-5 md:px-12 lg:px-16 xl:px-0'>
        {/* Left Content */}
        <div>
          <BaseBtn text='Get In Touch' icon={MdArrowOutward} />
          <h2 className='sub__title mt-4'>Get in touch with us</h2>
          <p className='sub__para mt-3'>
            Fill in this form or send us an e-mail at{' '}
            <a
              href='mailto:info@stock.com'
              className='text-[#2AA169] hover:underline'
            >
              info@stock.com
            </a>{' '}
            with your inquiry.
          </p>

          <div className='mt-6 space-y-4'>
            <p className='text-gray-800'>
              <span className='font-semibold'>Or feel free to call us at:</span>
              <br />
              <a
                href='tel:+917303381314'
                className='text-green-600 hover:underline'
              >
                +91-7303381314
              </a>
            </p>
            <p className='text-gray-800'>
              <span className='font-semibold'>
                Or you can visit in Delhi at:
              </span>
              <br />
              <span className='text-green-600'>
                2/3, Block 2, West Patel Nagar, New Delhi – 110008
              </span>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className='bg-white rounded-lg shadow p-6'>
          <form className='space-y-4'>
            {/* Row 1 */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='Name'
                className='w-full border border-[#2AA169] rounded px-3 py-2 focus:outline-none '
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full border border-[#2AA169] rounded px-3 py-2 focus:outline-none '
              />
            </div>

            {/* Row 2 */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <select className='border border-[#2AA169] rounded px-3 py-2 focus:outline-none '>
                <option>India (+91)</option>
                <option>USA (+1)</option>
                <option>UK (+44)</option>
              </select>
              <input
                type='text'
                placeholder='Phone Number'
                className='w-full border border-[#2AA169] rounded px-3 py-2 focus:outline-none '
              />
              <select className='border border-[#2AA169] rounded px-3 py-2 focus:outline-none '>
                <option>Select Course</option>
                <option>CFA</option>
                <option>FRM</option>
                <option>ACCA</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows='4'
              placeholder='Message'
              className='w-full border border-[#2AA169] rounded px-3 py-2 focus:outline-none '
            ></textarea>

            {/* Button */}
            <button
              type='submit'
              className='w-full bg-[#2AA169] text-white font-medium py-3 rounded hover:bg-green-600 transition'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className='w-full h-[60vh] section__top'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.18120495003!2d77.16259597549341!3d28.593493975681094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c48d8db1f%3A0x40ec5bb9dd34285d!2s2%2F3%2C%20Block%202%2C%20West%20Patel%20Nagar%2C%20Patel%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110008%2C%20India!5e0!3m2!1sen!2sbd!4v1693922786749!5m2!1sen!2sbd'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
  )
}
