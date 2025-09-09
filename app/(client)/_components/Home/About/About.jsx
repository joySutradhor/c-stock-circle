'use client'
import React from 'react'
import Tooltip from '../../utilities/Tooltip'
import { FaUserAlt } from 'react-icons/fa'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import BaseBtn from '../../utilities/BaseBtn'

export default function About () {
  const financialContent = [
    {
      id: 1,
      number: '10K+',
      title: 'Investment  Management'
    },
    {
      id: 2,
      number: '15.5K',
      title: 'Wealth Planning and insurance '
    },
    {
      id: 3,
      number: '45.5K',
      title: 'Corporate Finance Management'
    }
  ]

  return (
    <section>
      <div className='grid lg:grid-cols-[35%_60%] xl:grid-cols-2 gap-x-5 xl:gap-x-10 justify-between items-end'>
        <div>
          <Tooltip
            icon={FaUserAlt}
            text='Our Company'
            link='/about'
            headerText='Leading Financial Solutions '
            colorText = "for Your Success"
            // des='Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future.'
          />
        </div>
        <div className='grid md:grid-cols-3 gap-3  lg:gap-5 mt-5 md:mt-10 lg:mt-0'>
          {financialContent?.map((data, i) => (
            <div key={i} className='card__border p-5 rounded-md'>
              <h3 className='small__title mb-1.5'>{data.number}</h3>
              <p className='base__para'>{data.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* content area */}

      <div className='section_topSpace'>
        <div className='ab__content__container'>
          <div className=''>
            <Image
              src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/about.jpg'
              height={800}
              width={800}
              alt='about us image'
              className='object-cover rounded-md h-full w-full'
            />
          </div>

          <div className=''>
            <div className='grid md:grid-cols-2 gap-[2%] justify-between mt-5 mb-5 md:mt-10 md:mb-5 lg:mt-0 lg:mb-0'>
              <div className=' ab__card__parent card__border'>
                <h3 className='small__title mb-3'>What can text  do for me?</h3>
                <p className='base__para'>
                  With so much emphasis and hype around visual social media,
                  what is the future of text-centric marketing?
                </p>

                {/* <button className='btn__style mt-5 flex gap-x-2 items-center'>
                  {' '}
                  <span>Learn More</span>{' '}
                  <span>
                    <MdArrowOutward />
                  </span>{' '}
                </button> */}
              </div>

              <div className='ab__card__parent card__border'>
                <h3 className='small__title mb-3'>content have any ?</h3>
                <p className='base__para'>
                  With so much emphasis and hype around visual social media,
                  what is the future of text-centric marketing?
                </p>
                {/* <button className='btn__style mt-5 flex gap-x-2 items-center'>
                  {' '}
                  <span>Learn More</span>{' '}
                  <span>
                    <MdArrowOutward />
                  </span>{' '}
                </button> */}
              </div>
            </div>

            <div className='ab__card__parent card__border mt-[2%]'>
              <h3 className='small__title mb-1.5 '>visual content marketing good for then?</h3>
              <p className='base__para'>
                the same amount from social media/SEO. However social media is a
                new way for companies to share their products and services
                through word single customer, but also creating potential
                customers through their followers. You become a trusted brand
                when someone sees that they know someone who follows .
              </p>

              {/* <button className='btn__style mt-5 flex gap-x-2 items-center'>
                {' '}
                <span>Learn More</span>{' '}
                <span>
                  <MdArrowOutward className='arrow__color' />
                </span>{' '}
              </button> */}
              <div className='mt-5'>
                <BaseBtn text="Learn More" icon={MdArrowOutward} link="/about"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
