'use client'
import React from 'react'
import Tooltip from '../../utilities/Tooltip'
import { PiStudentFill } from 'react-icons/pi'
import Marquee from 'react-fast-marquee'

export default function StudentWorks () {
  const images = [
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-2-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/10-2-2.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/2-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/2-2-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/2017201928922176-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/2017201967932542-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/2017201985347884-2.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/20182019017459313-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/20182019261338410-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/20192019066659815-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/20192019289142317-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/20192019549181914-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/3-2-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/4-3-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/5-2-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/6-2-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/7-2-1-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/8-2-1-1.png',
    'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/9-2-1.png'
  ]

  return (
    <div>
      <div className='text-center max-w-3xl mx-auto'>
        <Tooltip
          icon={PiStudentFill}
          text='Student Placement'
          headerText='Where our Students '
          colorText="are placed?"
          des='Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future.'
        />
      </div>

      

      {/* two rows of marquee */}
      <div className='section_topSpace space-y-5 lg:space-y-8'>
        {/* Row 1 - scroll left */}
        <Marquee direction='left' speed={40} gradient={true} gradientColor='#ffff' pauseOnHover={true}>
          {images.map((img, i) => (
            <div className='st__works__row__parent'>
              <img
                key={`row1-${i}`}
                src={img}
                alt={`student-left-${i}`}
                className='st__works__row__img'
              />
            </div>
          ))}
        </Marquee>

        {/* Row 2 - scroll right */}
        <Marquee direction='right' speed={40} gradient={true} gradientColor='#ffff' pauseOnHover={true}>
          {images.map((img, i) => (
            <div className='st__works__row__parent'>
              <img
                key={`row2-${i}`}
                src={img}
                alt={`student-right-${i}`}
                className='st__works__row__img'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
