'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { SlGraph } from 'react-icons/sl'
import Tooltip from '../utilities/Tooltip'
import BaseBtn from '../utilities/BaseBtn'
import { financialServices } from '@/app/(client)/_components/fakeDB/marketData'
import axios from 'axios'

// Component with mapped services
const MarketUpdate = () => {
  const [marketUpdateDate, setMarketUpdateData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    axios
      .get('https://stockcircle.mrshakil.com/api/markets/market-update/') 
      .then(res => {
        setMarketUpdateData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  console.log(marketUpdateDate , "fetch data")

  return (
    <div>
      <div className='text-center max-w-3xl mx-auto '>
        <Tooltip
          icon={SlGraph}
          text='Market Updates'
          headerText='Our Market Updates '
          colorText='for Your Success'
          des='Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future.'
        />
      </div>

      <div className='blog__container section_topSpace'>
        {marketUpdateDate?.map(service => (
          <div
            key={service.id}
            className='card__border  bg-white rounded-md  hover:shadow transition-shadow duration-300'
          >
            {/* Image */}
            <div className='relative  overflow-hidden  h-[30vh] w-full'>
              <Image
                src={service.thumbnail}
                alt={service.title}
                fill
                className='object-cover rounded-t-md'
              />
            </div>

            {/* Content */}
            <div className='p-3 md:p-6'>
              <h3 className='small__title mb-3 '>{service.title}</h3>
              <p className='base__text mb-4'>{service.short_summary}</p>

              {/* CTA Button */}

              <div className='mt-5'>
                <BaseBtn
                  text='Learn More'
                  icon={MdArrowOutward}
                  link={`/market-update/${service.id}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketUpdate
