import React from 'react'
import {FaPhone} from "react-icons/fa6"
import { MdEmail, MdLocationCity, MdLocationPin } from 'react-icons/md'
const Preview = ({personnalInfo , skills ,languages ,educations ,experiences}) => {
  return (
    <div className="preview w-full h-full flex">
        <div className="side-left overflow-hidden w-[230px] bg-blue-950 min-h-full">
            <div className="cv-img flex justify-center mt-3">
                <img src={personnalInfo?.image} className='rounded-full border-4 border-slate-50 w-[160px] object-cover h-[160px]' alt="#" />
            </div>
            <div className="contact px-3 mt-9 text-slate-50">
                <h3 className='text-[22px] font-[600] mb-3 border-b-2 border-slate-50 tracking-[2px] uppercase'>Contact</h3>
                <p className='mb-3 w-full overflow-hidden text-[10px] flex items-center gap-3'><FaPhone /> <div className='font-[600] max-w-[180px]'>{personnalInfo.telephone}</div></p>
                <p className='mb-3 w-full overflow-hidden text-[10px] flex items-center gap-3'><MdEmail /> <div className='font-[600] max-w-[180px]'>{personnalInfo.email}</div></p>
                <p className='mb-3 w-full overflow-hidden text-[10px] flex items-center gap-3'><MdLocationPin /> <div className='font-[600] max-w-[180px]'>{personnalInfo.adresse}</div></p>
            </div>
            <div className="skills px-3 mt-4 text-slate-50">
                <h3 className='text-[22px] font-[600] mb-2 border-b-2 border-slate-50 tracking-[2px] uppercase'>skills</h3>
                <ul>
                {skills.map((skill)=>(
                   <li key={skill?.id} className='list-disc ms-5 capitalize text-[14px] font-[300]'>
                    <span className='inline-block w-[110px]'>{skill?.skill}</span>
                    <span className='progress inline-block rounded-md w-[70px] h-[8px] border-[1px] border-slate-100'>
                        <div className="bar h-full bg-slate-50" style={{width:`${skill.level}%`}}></div>
                    </span>
                   </li>
                  ))}
                  </ul>
            </div>
            <div className="languages px-3 mt-4 text-slate-50">
                <h3 className='text-[22px] font-[600] mb-2 border-b-2 border-slate-50 tracking-[2px] uppercase'>languages</h3>
                <ul>
                {languages.map((lang)=>(
                   <li key={lang?.id} className='list-disc ms-5 capitalize text-[14px] font-[300]'>
                    <span className='inline-block w-[110px]'>{lang?.language}</span>
                    <span className='progress inline-block rounded-md w-[70px] h-[8px] border-[1px] border-slate-100'>
                        <div className="bar h-full bg-slate-50" style={{width:`${lang.level}%`}}></div>
                    </span>
                   </li>
                  ))}
                  </ul>
            </div>
        </div>
        <div className="side-right flex-1 bg-slate-50 text-slate-700 min-h-full">
           <h1 className='text-center uppercase text-[25px] mt-4 font-[700]'>{personnalInfo.firstName} {personnalInfo.lastName}</h1>
           <h6 className='text-center capitalize text-[16px] font-[400]'>{personnalInfo.speciality}</h6>
           <div className="profile px-3 mt-9 text-slate-700">
                <h3 className='text-[22px] font-[600] mb-2 border-b-2 border-slate-700 tracking-[2px] uppercase'>profile</h3>
                <p className='mb-3 w-full overflow-hidden text-[12px]'>{personnalInfo.profile}</p>
            </div>
            <div className="educations px-3 mt-4 text-slate-700">
                <h3 className='text-[22px] font-[600] mb-2 border-b-2 border-slate-700 tracking-[2px] uppercase'>educations</h3>
                <ul>
                {educations?.map((edu)=>(
                     <div className="edu-item py-2" key={edu.id}>
                        <div className="edu-duration flex gap-2 text-[12px] text-mainColor font-[700]">
                            <span>{edu.startDate}</span>
                            <span>-</span>
                            {edu.present ?
                            <span>{edu.present && "present"}</span>
                            :<span>{edu.endDate}</span>
                        }
                        </div>
                        <div className="edu-school font-[600] text-[13px] capitalize">{edu.school}</div>
                        <li className="edu-degree-field list-disc ms-4 font-[500] text-[12px] capitalize">{edu.degree} in {edu.field}</li>
                     </div>
                  ))}
                  </ul>
            </div>
            <div className="experiences px-3 mt-4 text-slate-700">
                <h3 className='text-[22px] font-[600] mb-2 border-b-2 border-slate-700 tracking-[2px] uppercase'>experiences</h3>
                <ul>
                {experiences?.map((exp)=>(
                     <div className="exp-item py-2" key={exp.id}>
                            <div className="flex justify-between items-center">
                                 <div className="exp-company font-[600] text-[13px] capitalize">{exp.company}</div>
                                 <div className="exp-duration flex gap-2 text-[12px] text-mainColor font-[700]">
                                        <span>{exp.startDate}</span>
                                        <span>-</span>
                                        {exp.present ?
                                        <span>{exp.present && "present"}</span>
                                        :<span>{exp.endDate}</span>
                                        }
                                  </div>
                            </div>
                        <div className="exp-role font-[500] text-[12px] capitalize">{exp.role}</div>
                        <p className="exp-description text-[12px]">{exp.description}</p>
                     </div>
                  ))}
                  </ul>
            </div>
        </div>
    </div>
  )
}

export default Preview