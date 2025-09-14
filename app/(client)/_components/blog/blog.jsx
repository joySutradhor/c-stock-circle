'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Tooltip from '../utilities/Tooltip'
import BaseBtn from '../utilities/BaseBtn'
import { FaBlog } from 'react-icons/fa6'
import axios from 'axios'

// Component with mapped services
const Blog = () => {

  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    axios
      .get('https://stockcircle.mrshakil.com/api/blogs/blog/') 
      .then(res => {
        setBlogData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  console.log(blogData , "fetch data")

  return (
    <div>
      <div className='text-center max-w-3xl mx-auto '>
        <Tooltip
          icon={FaBlog}
          text='All Blogs'
          headerText='Insights & Ideas'
          colorText='for Your Growth'
          des='Explore expert insights, tips, and strategies on finance, business, and technology. Stay informed with our latest articles, guides, and thought leadership content designed to help you make smarter decisions and stay ahead in your journey.'
        />
      </div>

      <div className='blog__container section_topSpace'>
        {blogData?.map(service => (
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
                  link={`/blog/${service.id}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
