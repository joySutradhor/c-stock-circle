'use client'
import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { SlGraph } from 'react-icons/sl'
import Tooltip from '../utilities/Tooltip'
import BaseBtn from '../utilities/BaseBtn'
import {financialServices} from "@/app/(client)/_components/fakeDB/marketData"


// Component with mapped services
const MarketUpdate = () => {

    console.log(financialServices)
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
        {financialServices?.map(service => (
          <div
            key={service.id}
            className='card__border  bg-white rounded-md  hover:shadow transition-shadow duration-300'
          >
            {/* Image */}
            <div className='relative  overflow-hidden  h-[30vh] w-full'>
              <Image
                src={service.imgUrl}
                alt={service.title}
                fill
                className='object-cover rounded-t-md'
              />
            </div>

            {/* Content */}
            <div className='p-3 md:p-6'>
              <h3 className='small__title mb-3 '>{service.title}</h3>
              <p className='base__text mb-4'>{service.des}</p>

              {/* CTA Button */}

              <div className='mt-5'>
                <BaseBtn text='Learn More' icon={MdArrowOutward} link={`/market-update/${service.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketUpdate
