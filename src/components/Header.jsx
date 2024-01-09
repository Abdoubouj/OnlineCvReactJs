import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-[90px]'>
       {/* <div className="header-top h-1/2 bg-mainColor">
        
       </div> */}
       <div className="header-bottom h-full border-b-2 border-slate-200 flex items-center justify-center">
        <nav className='flex items-center justify-center gap-5'>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/">Personnal Informations</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/educations">Education</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/experiences">Experiences</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/skills">Skills</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/languages">Languages</NavLink>
        </nav>
       </div>
    </header>
  )
}

export default Header