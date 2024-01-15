import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
import { FiMoon, FiSun } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa6'
const Header = () => {
  const [isLightMode , setIsLightMode] =  useState(true);
  const [showMenu , setShowMenu] = useState(false);
  const handleChangeMode = () =>{
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <header className='h-[90px] relative'>
       <div className="header dark:bg-slate-800 px-10 h-full border-b-2 border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="app-logo" width={100} />
        </div>
        <nav className={`${showMenu ?'flex fixed z-10 p-10 bg-slate-50 h-screen top-0 left-0':'hidden'} lg:bg-inherit lg:h-full flex-col lg:flex lg:flex-row lg:static lg:items-center lg:justify-center gap-5`}>
          <NavLink className="py-2 text-[16px] px-2 lg:px-5 lg:text-[15px] transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/">Personnal Informations</NavLink>
          <NavLink className="py-2 text-[16px] px-2 lg:px-5 lg:text-[15px] transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/educations">Education</NavLink>
          <NavLink className="py-2 text-[16px] px-2 lg:px-5 lg:text-[15px] transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/experiences">Experiences</NavLink>
          <NavLink className="py-2 text-[16px] px-2 lg:px-5 lg:text-[15px] transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/skills">Skills</NavLink>
          <NavLink className="py-2 text-[16px] px-2 lg:px-5 lg:text-[15px] transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/languages">Languages</NavLink>
        </nav>
        <div className="flex gap-2 items-center text-[22px]  text-mainColor">
          <button className="current-mode" onClick={handleChangeMode}>
            {isLightMode ? <FiSun /> : <FiMoon />
          }
          </button>
        <div className="bar lg:hidden cursor-pointer" onClick={()=>{setShowMenu(!showMenu)}}>
        <FaBars />
        </div>
        </div>
       </div>
    </header>
  )
}

export default Header