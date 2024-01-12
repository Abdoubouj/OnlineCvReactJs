import React from 'react'
import {FaPhone} from "react-icons/fa6"
import { MdEmail, MdLocationCity, MdLocationPin } from 'react-icons/md'
const Preview = ({personnalInfo}) => {
  return (
    <div className="preview w-full h-full flex">
        <div className="side-left overflow-hidden w-[230px] bg-blue-950 min-h-full">
            <div className="cv-img flex justify-center mt-3">
                <img src={personnalInfo?.image} className='rounded-full border-4 border-slate-50 w-[160px] object-cover h-[160px]' alt="#" />
            </div>
            <div className="contact px-3 mt-9 text-slate-50">
                <h3 className='text-[22px] font-[900] mb-5 border-b-2 border-slate-50 tracking-[2px] uppercase'>Contact</h3>
                <p className='mb-3 w-full overflow-hidden text-[10px] flex items-center gap-3'><FaPhone /> <div className='font-[600] max-w-[180px]'>{personnalInfo.telephone}</div></p>
                <p className='mb-3 w-full overflow-hidden text-[10px] flex items-center gap-3'><MdEmail /> <div className='font-[600] max-w-[180px]'>{personnalInfo.email}</div></p>
                <p className='mb-3 w-full overflow-hidden text-[10px] flex items-center gap-3'><MdLocationPin /> <div className='font-[600] max-w-[180px]'>{personnalInfo.adresse}</div></p>
            </div>
        </div>
        <div className="side-right flex-1 bg-slate-50 text-slate-700 min-h-full">
           <h1 className='text-center uppercase text-[25px] mt-4 font-[700]'>{personnalInfo.firstName} {personnalInfo.lastName}</h1>
           <h6 className='text-center capitalize text-[16px] font-[400]'>{personnalInfo.speciality}</h6>
        </div>
    </div>
  )
}

export default Preview