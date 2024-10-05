import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { cross } from '../assets/icons';
import { useState } from 'react'

const Nav = () => {
  const [ active, setActive ] = useState("");
  const [toggle , setToggle] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {
                navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {item.label}
                        </a>
                    </li>
                ))
            }
        </ul>
        <div className='max-lg:block hidden'>
            <img src={toggle ? cross : hamburger} alt="Hamburger" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
        
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-10 right-5 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='bg-slate-100 p-5 list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((item) => (
                <li key={item.label} className={`${active === item.label ? "text-white" : "text-black"} font-montserrat leading-normal text-lg`} onClick={() => {
                    setToggle(!toggle);
                    setActive(link.label);
                  }}>
                  <a href={item.href}>{item.label}</a>
                </li>
                ))}
              </ul>
            </div>
        
        </div>
      </nav>
    </header>
  )
}

export default Nav
