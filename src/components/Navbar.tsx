import logo from '../assets/logo.png';
import { navItems } from '../constants/index';
import { Menu, X } from "lucide-react";
import React, { useState } from 'react';

type NavItems = {
    href: string,
    label: string
}

const Navbar: React.FC = () => {
    const [menuDrawer, setMenuDrawer] = useState(false);

    function toggleMenuDrawer() {
        setMenuDrawer(!menuDrawer);
    }

    return (
        <nav className='sticky top-0 w-full flex items-center justify-between px-6 py-2 border-b-2 border-gray-800 backdrop-blur-lg'>
            {/* Logo and Site Name */}
            <div className='flex items-center gap-2 text-2xl tracking-tight'>
                <img src={logo} alt="Logo" className='w-10 h-10' />
                <p>VirtualR</p>
            </div>

            {/* Navigation Links */}
            <div className='hidden lg:flex gap-6'>
                {navItems.map((item: NavItems, index) => (
                    <a href={item.href} className='hover:text-orange-700' key={index}>{item.label}</a>
                ))}
            </div>

            {/* Buttons */}
            <div className='hidden lg:flex gap-6'>
                <button className='border rounded px-[10px] py-[3px]'>Sign In</button>
                <button className='bg-gradient-to-r from-orange-500 to-orange-800 rounded px-[10px] py-[3px]'>
                    Create an account
                </button>
            </div>

            {/* Menu Button for Mobile */}
            <div className='lg:hidden'>
                {/* Toggle between Menu and X icons based on menuDrawer state */}
                <button onClick={toggleMenuDrawer} className='text-2xl z-10'>
                    {menuDrawer ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuDrawer && (
                <div className='fixed top-0 right-0 w-full py-20 flex flex-col items-center justify-center gap-6 bg-neutral-900 '>
                    {/* Close button inside the drawer */}
                    <button
                        onClick={toggleMenuDrawer}
                        className='absolute top-[13px] right-10 text-2xl'>
                        <X />
                    </button>
                    {/* Menu items */}
                    {navItems.map((item: NavItems, index) => (
                        <a href={item.href} key={index} className="text-md">
                            {item.label}
                        </a>
                    ))}
                    <button className='border rounded px-4 py-1'>Sign In</button>
                    <button className='bg-gradient-to-r from-orange-500 to-orange-700 rounded px-3 py-1'>
                        Create an account
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
