import { headerLogo } from '../assets/images'
import { navLinks } from '../constants/Const'
import Hamburger from './Hamburger'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        {/* 1. logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* 2.Layout for navbar links */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {/* mapping to all the links and placing the, in a list with their labels */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
                className='font-montserrat 
              leading-normal 
              text-lig
             text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Hamburger/>
        </nav>

    </header>
    
  )
}

export default Nav