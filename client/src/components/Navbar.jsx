import React, {useState} from 'react'

import { assets, menuLinks } from '../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

// navbar code start
const location=useLocation()
const [open,setOpen] = useState(false)
const navigate = useNavigate()

  return (
    <div className={`flex items-center justify-between px-6 md:px-13 lg:px-24 xl:px-12 py-10 text-cyan-600 border-b border-borderColor:cyan relative transition-all ${location.pathname === "/" && "bg-green"}`} > 
  
        <Link to='/'>
<img src={assets.logo} alt="logo"  className="h-18"/>
  
        </Link>
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-38 max-sm:border-t border-border-color right-0 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 max-sm:p-6 transition-all duration-300 z-60 ${location.pathname === "/" ? "bg-green": "bg-blue"} ${open ? "max-sm:translate-x-0":"max-sm:translate-x-full" }  `}>
        
 {menuLinks.map((link,index)=>(
        <Link key={index} to={link.path}>
        {link.name}
        </Link>
    ))}

    <div className='hidden lg:flex items-center text-sm gap02 border border-borderColor px-5 rounded-full max-w-56'>
 <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='Search products' />
 <img src={assets.search_icon} alt="search" />
    </div>
    <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
      <button onClick={()=> navigate('/owner')} className='cursor-pointer'>Dashboard</button>
      <button onClick={()=> setShowLogin(true) } className='cursor-pointer px-9 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
    </div>
        </div>
     <button className='sm:hidden cursor-pointer' aria-label='menu' onClick={()=> setOpen(!open)}>
      <img src={open ? assets.close_icon: assets.menu_icon} alt="menu" />
     </button>
    </div>
  )
}

export default Navbar
