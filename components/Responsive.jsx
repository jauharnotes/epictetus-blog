import Link from "next/link";
import { useState } from "react";

export default function Responsive() {
    const [dropdown, setDropdown] = useState(false);
    const [navcanvas, setNavcanvas] = useState(false);
    const [search, setSearch] = useState(false);

    const dropdownList = [
        { href: '#', text: 'Internet' },
        { href: '#', text: 'Books' },
        { href: '#', text: 'Open Source' }
      ]

    return(
        <>
        <div className={`fixed z-10 h-full bg-gradient-to-b from-slate-700 to-slate-500 transition-all -top-0 ${navcanvas ? 'w-full' : 'left-full'}`}>
           {/* button close */}
            <button onClick={() => setNavcanvas(false)} className="float-right p-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x inline-block text-tcontent"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button> 
            <div className='flex-col p-8 space-y-4'>
                <ul className="space-y-6 text-2xl">
                    <li>
                        <a href='#' className='text-theading transition-all hover:transform hover:translate-x ease-in-out duration-200 hover:border-b-2'>
                        UI Design</a>
                    </li>
                    <li>
                        <a href='#' className='text-theading transition-all hover:transform hover:translate-x ease-in-out duration-200 hover:border-b-2'>
                        Frond-end</a>
                    </li>
                    <li>
                        <a href='#' className='text-theading transition-all hover:transform hover:translate-x ease-in-out duration-200 hover:border-b-2'>
                        Back-end</a>
                    </li>
                </ul>
                <div className='relative'>
                    <a href='#' onClick={() => setDropdown(prev => !prev)} className='text-theading text-2xl flex items-center transition-all hover:transform hover:translate-x ease-in-out duration-200 hover:border-b-2'>
                    Lainnya
                    <svg className='ml-2' width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg></a>

                    {dropdown && (
                    <ul className='absolute mt-3 w-[200px] z-30'>
                        {dropdownList.map(({text, href}) => (
                        <li key={text} className='border-b-[0.1px] border-theading last:border-none'>
                        <a href={href} className='flex flex-row justify-center py-1 px-16 bg-slate-800 text-theading transition ease-in-out duration-150 hover:bg-slate-900'>{text}</a>
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between md:hidden mx-7">
            <button onClick={() => setNavcanvas(prev => !prev)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>
            </button>
            <div className='flex items-center space-x-3 cursor-pointer'>
              <span className='w-10 h-10 bg-slate-600 rounded-md font-fontLogo font-semibold text-2xl flex justify-center items-center text-theading'>
                E
              </span>
              <Link href='/'>
                <a href='#' className='text-theading text-lg'>
                    Epictetus
                </a>
                </Link>
            </div>
            <button onClick={() => setSearch(prev => !prev)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>
            </button>
        </div>
        <div className={`px-5 relative transition-all ${search ? 'top-4' : '-top-40'}`}>
            <input
                type='text'
                placeholder='Search'
                className='bg-search w-full rounded-full bg-slate-800 h-11 text-theading text-lg px-8'
            />
            <button onClick={() => setSearch(false)} className="float-right p-8 relative -top-[67px] hover:text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x inline-block text-tcontent"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button> 
        </div>
    </>
    )
}