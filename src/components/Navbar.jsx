import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = ({toggle, setToggle}) => {
  const [active, setActive] = useState('');
  return (
    <div className='navbar-wrapper'>
      <img src={toggle ? close : menu} alt="menu" className="hamburger w-[21px] h-[21px] object-contain cursor-pointer bg-black" onClick={() => setToggle(!toggle)}/>
        <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient fixed top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                  ? "text-secondary"
                  : "text-white-100"
                } hover:text-secondary font-poppins font-medium cursor-pointer text-[18px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-navbar`}
        onClick={() => setToggle(false)}
      >
        <div className="w-full flex justify-between items-center mx-auto">
          <div className="flex-col">
            <Link 
                to="/" 
                className="flex items-center gap-2" 
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                <div className='flex flex-col'>
                  <p className="text-white-100 text-[18px] font-bold cursor-pointer"> Farzan Imanzadeh </p>
                  <span className="text-sm text-white-100">Full-Stack Engineer</span>
                </div>
              </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar