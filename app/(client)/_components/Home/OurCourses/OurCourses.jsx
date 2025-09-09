'use client'
import React from 'react'
import Tooltip from '../../utilities/Tooltip'
import { BsStack } from 'react-icons/bs'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { SiBetterstack } from 'react-icons/si'
import { SiSololearn } from 'react-icons/si'
import { SiGraphite } from 'react-icons/si'
import { GiCroissantsPupil } from 'react-icons/gi'
import BaseBtn from '../../utilities/BaseBtn'

export default function OurCourses () {
  return (
    <section>
      <div className='text-center max-w-3xl mx-auto'>
        <Tooltip
          icon={BsStack}
          text='Our courses'
          link='/courses'
          headerText='Master Financial '
          colorText='Markets'
          des='Learn from industry professionals with our comprehensive trading courses, investment strategies, and financial education programs designed to build your expertise and confidence in the markets.'
        />
      </div>

      {/* our courses cards */}

      <div className='course__container section_topSpace'>
        <div className='space-y-5'>
          {/* left first card */}
          <div className='card__border course__card__parent'>
            <h3 className='small__title course__card__title'>
              <span className='course__card__icon card__border'>
                <SiBetterstack className='arrow__color' />{' '}
              </span>{' '}
              Financial & Valuations (CIB)®
            </h3>
            <p className='base__para'>
              CFA Coaching with highly intuitive and derivation based conceptual
              clarity and ZERO rote learning.
            </p>

            <ul className='base__list__para course__list__parent'>
              <li>100% Job Support</li>
              <li>3,000+ Students Enrolled</li>
            </ul>

            <div className='mt-5'>
              <BaseBtn text='Join Now' icon={MdArrowOutward} />
            </div>
          </div>

          {/* left second card */}
          <div className='card__border course__card__parent'>
            <h3 className='small__title course__card__title'>
              <span className='course__card__icon card__border'>
                <SiSololearn className='arrow__color' />{' '}
              </span>{' '}
              ACCA® Prep Course
            </h3>
            <p className='base__para'>
              CFA Coaching with highly intuitive and derivation based conceptual
              clarity and ZERO rote learning.
            </p>

            <ul className='base__list__para course__list__parent'>
              <li>100% Job Support</li>
              <li>3,000+ Students Enrolled</li>
            </ul>

            <div className='mt-5'>
              <BaseBtn text='Join Now' icon={MdArrowOutward} />
            </div>
          </div>

        </div>


        <div className='hidden xl:block'>
          <Image
            src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image.png'
            height={1000}
            width={1000}
            alt='course image'
            className=' h-auto'
          />
        </div>

        <div className='space-y-5'>
          {/* right first card */}
          <div className='card__border course__card__parent'>
            <h3 className='small__title course__card__title'>
              <span className='course__card__icon card__border'>
                <GiCroissantsPupil className='arrow__color' />{' '}
              </span>{' '}
              CFA® Prep Course
            </h3>
            <p className='base__para'>
              CFA Coaching with highly intuitive and derivation based conceptual
              clarity and ZERO rote learning.
            </p>

            <ul className='base__list__para course__list__parent'>
              <li>100% Job Support</li>
              <li>3,000+ Students Enrolled</li>
            </ul>

            <div className='mt-5'>
              <BaseBtn text='Join Now' icon={MdArrowOutward} />
            </div>
          </div>

          {/* right second card */}
          <div className='card__border course__card__parent'>
            <h3 className='small__title course__card__title'>
              <span className='course__card__icon card__border'>
                <SiGraphite className='arrow__color' />{' '}
              </span>{' '}
              FRM® Prep Course
            </h3>
            <p className='base__para'>
              CFA Coaching with highly intuitive and derivation based conceptual
              clarity and ZERO rote learning.
            </p>

            <ul className='base__list__para course__list__parent'>
              <li>100% Job Support</li>
              <li>3,000+ Students Enrolled</li>
            </ul>

            <div className='mt-5'>
              <BaseBtn text='Join Now' icon={MdArrowOutward} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
