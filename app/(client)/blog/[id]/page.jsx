'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Banner from '@/app/(client)/_components/utilities/Banner'
import { financialServices } from '@/app/(client)/_components/fakeDB/marketData'
import Image from 'next/image'
import BaseBtn from '../../_components/utilities/BaseBtn'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Link from 'next/link'
import { BsStack } from 'react-icons/bs'

export default function MarketUpdateDetails () {
  const { id } = useParams() // Get dynamic id from URL

  // Find the service by id
  const service = financialServices.find(item => item.id === Number(id))

  if (!service) {
    return (
      <div className='max-w-4xl mx-auto py-10 text-center'>
        <h2 className='text-2xl font-bold'>Service Not Found</h2>
      </div>
    )
  }

  return (
    <div>
      {/* Banner */}
      <Banner
        bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144221.jpg'
        text='Market Details'
        Icon={BsStack}
        breadcrumb={`home/market-update/${id}`}
      />

      {/* Details */}
      <div className='max-w-7xl mx-auto px-5 md:px-12 lg:px-16 xl:px-0 mt-[10vh] lg:mt-[15vh]'>
        {/* <BaseBtn text="Back To Market" icon={FaLongArrowAltLeft} link="/market-update"/> */}
        <div>
          <Link href='/market-update'>
            <button className='inline-flex items-center gap-x-2 btn__style cursor-pointer group mb-5 '>
              <FaLongArrowAltLeft className='text-base text-[#2AA169]  group-hover:text-white' />
              <span>Back To Market</span>{' '}
            </button>
          </Link>
        </div>
        {/* Image */}
        <div className='relative h-[50vh] w-full mb-6'>
          <Image
            src={service.imgUrl}
            alt={service.title}
            fill
            className='object-cover rounded-md'
          />
        </div>

        {/* Title & Description */}
        <h1 className='text-3xl font-bold mb-4'>{service.title}</h1>
        <p className='text-lg text-gray-600 mb-6'>{service.des}</p>
        <p className='text-gray-800 leading-relaxed'>{service.longDes}</p>
      </div>
    </div>
  )
}
