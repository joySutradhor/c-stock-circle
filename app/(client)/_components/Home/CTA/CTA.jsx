"use client"
import React from 'react'
import Tooltip from '../../utilities/Tooltip'
import { FaTrophy } from "react-icons/fa6";


export default function CTA () {
  // Statistics data
  const statsData = [
    {
      id: 1,
      number: '250+',
      title: 'Past Recruiters',
      description: 'Top companies trust our graduates'
    },
    {
      id: 2,
      number: '4.8',
      title: 'Average Rating',
      description: 'Excellence in education delivery'
    },
    {
      id: 3,
      number: '98%',
      title: 'Positive Feedback',
      description: 'Student satisfaction guaranteed'
    },
    {
      id: 4,
      number: '50000+',
      title: 'Students Trained',
      description: 'Successful careers launched'
    }
  ]

  return (
    <div className='gradient__color'>
      <div className='cta__container'>
        <div>
          <Tooltip
            icon={FaTrophy}
            text='Our Records'
            headerText='Our Awesome '
            colorText = "Records"
            des='Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future.'
          />
        </div>

        
        <div>
          <div className='cta__card__parent'>
            {statsData.map(stat => (
              <div key={stat.id} className='text-center text-white card__border p-5 rounded-md '>
                {/* Number */}
                <div className='sub__title !text-green-400'>
                  {stat.number}
                </div>

                {/* Title */}
                <h3 className='base__para mb-2'>
                  {stat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
