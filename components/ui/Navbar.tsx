'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { mainLinks, userLinks } from '@/Constants'

//icons
import {
    AiOutlineUser,
    
    AiOutlineShoppingCart,
    AiOutlineHeart
} from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { IoShirtOutline } from 'react-icons/io5'

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [user, setUser] = useState(false)

    const mobileMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu)
    }

    const userMenuHandler = () => {
        setOpenUserMenu(!openUserMenu)
    }
    return (
        <nav>
            <div className='main-container border-b border-1 flex justify-between items-center py-2 px-8 relative bg-[#FCFAEE]'>
                <Link href={'/'}>
                    <div className='flex gap-1 items-center text-xl font-medium text-black'>
                        <h1>AL-BAKARAH STORE</h1>
                        <IoShirtOutline />
                    </div>
                </Link>
                <ul className='flex gap-10 max-md:hidden'>
                    {mainLinks.map(link => (
                        <Link href={link.route}>
                            <li> {link.label}</li>
                        </Link>
                    ))}
                </ul>

                <div className='flex gap-5 text-xl [&>*]:cursor-pointer'>
                    <AiOutlineShoppingCart />
                    <AiOutlineHeart />
                    <div className='max-md:hidden' onClick={userMenuHandler}>
                        <AiOutlineUser />
                    </div>
                    <div className='md:hidden'>
                        {openMobileMenu ? <MdClose /> : <FiMenu />}
                    </div>
                </div>
                {/* user menuu */}
                {openUserMenu && (
                    <div className="z-10 absolute right-0 top-[40px] w-28 bg-gray-700 shadow-md rounded-md p-4 text-white max-md:hidden text-center"></div>
                )}

            </div>
        </nav>
    )
}

export default Navbar
