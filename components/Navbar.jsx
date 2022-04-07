import { useState } from 'react';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

  const dropdownList = [
    { href: '#', text: 'Internet' },
    { href: '#', text: 'Books' },
    { href: '#', text: 'Open Source' }
  ]

    return (
        <nav className='py-8 px-3'>
        <div className='container mx-auto'>
          <div className='flex items-center'>
            <div className='flex items-center space-x-3 cursor-pointer w-2/12'>
              <span className='w-10 h-10 bg-slate-600 rounded-md font-fontLogo font-semibold text-2xl flex justify-center items-center text-theading'>
                E
              </span>
              <a href='#' className='text-theading text-lg'>
                Epictetus
              </a>
            </div>

            <div className='flex space-x-8 w-8/12'>
              <a href='#' className='text-sm text-theading xl:text-lg transition-all hover:transform hover:translate-x ease-in-out delay-200 hover:border-b-2'>
                UI Design</a>
              <a href='#' className='text-sm text-theading xl:text-lg transition-all hover:transform hover:translate-x ease-in-out delay-200 hover:border-b-2'>
                Frond-end</a>
              <a href='#' className='text-sm text-theading xl:text-lg transition-all hover:transform hover:translate-x ease-in-out delay-200 hover:border-b-2'>
                Back-end</a>

              <div className='relative'>
                <a href='#' onClick={() => setDropdown(prev => !prev)} className='text-sm text-theading xl:text-lg flex items-center'>
                  Lainnya
                  <svg className='ml-2' width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg></a>

                {dropdown && (
                  <ul className='absolute mt-3 w-[200px]'>
                    {dropdownList.map(({text, href}) => (
                    <li key={text} className='border-b-[0.1px] border-theading last:border-none'>
                      <a href={href} className='flex flex-row justify-center py-1 px-16 bg-slate-800 text-theading transition ease-in-out duration-150 hover:bg-slate-900'>{text}</a>
                    </li>
                     ))}
                  </ul>
                )}

              </div>
            </div>
            <div className='w-2/12 flex justify-end'>
              <form className='w-full'>
                <input
                  type='text'
                  placeholder='Search'
                  className='bg-search w-full rounded-full bg-slate-900 h-11 text-theading px-8 pl-9 text-lg'
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    )
}