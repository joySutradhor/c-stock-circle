'use clinet'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaMailBulk, FaPlus } from 'react-icons/fa'
import { SlArrowDown } from 'react-icons/sl'

export default function Navbar () {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(null)

  const menus = [
    { name: 'Home', path: '/' },
    {
      name: 'Live Courses',
      path: '/live-courses',
      subMenu: [
        {
          name: 'Investment Banking',
          path: '/investment-banking'
        },
        {
          name: 'Financial Modeling',
          path: '/financial-modeling'
        },
        { name: 'Risk Management', path: '/risk-management' }
      ]
    },
    { name: 'Market Updates', path: '/market-update' },
    { name: 'About Us', path: '/about' },

    { name: 'Blog', path: '/blog' }
  ]

  const toggleMenu = name => {
    setOpenMenu(openMenu === name ? null : name)
  }

  return (
    <div className='fixed top-0 w-full gradient__color z-50'>
      <nav className='py-[2vh] max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-0'>
        {/* Logo */}
        <Link href='/'>
          <div>
            <Image
              height={1000}
              width={1000}
              alt='logo'
              src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png'
              className='object-cover w-56 h-auto  '
            />
          </div>
        </Link>

        <div className='flex items-center gap-x-16 '>
          {/* Menu */}
          <div className='relative'>
            <ul className='flex gap-x-10 items-center  '>
              {menus.map(menu => {
                const isActive = pathname === menu.path
                return (
                  <li key={menu.name} className='relative font-medium text-sm'>
                    <div>
                      {menu.subMenu ? (
                        <button
                          onClick={() => toggleMenu(menu.name)}
                          className={`flex items-center font-medium cursor-pointer gap-x-1 hover:text-green-500 transition-colors ${
                            openMenu === menu.name || isActive
                              ? 'text-green-500'
                              : 'text-black'
                          }`}
                        >
                          {menu.name}
                          <SlArrowDown
                            className={`text-sm  transition-transform duration-300 ${
                              openMenu === menu.name ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={menu.path}
                          className={`hover:text-green-500 transition-colors cursor-pointer ${
                            isActive ? 'text-green-500' : 'text-black'
                          }`}
                        >
                          {menu.name}
                        </Link>
                      )}

                      {/* Dropdown */}
                      {menu.subMenu && openMenu === menu.name && (
                        <ul className='absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-3 w-48 z-50'>
                          {menu.subMenu.map(sub => (
                            <li key={sub.name}>
                              <Link
                                href={sub.path}
                                className={`block px-4 py-2 text-sm text-black/80 hover:bg-green-100 hover:text-green-600 transition-colors ${
                                  pathname === sub.path ? 'text-green-500' : ''
                                }`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Button */}
          <div>
            <Link href='/contact'>
              <button className='inline-flex items-center gap-x-2 btn__style cursor-pointer group '>
                <FaMailBulk className='text-base text-[#2AA169]  group-hover:text-white ' />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
