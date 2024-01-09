import React, { useEffect, useState } from 'react'

const PersonnalInfo = ({sendData}) => {
    const [image, setImage]=useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [telephone,setTelephone] = useState("");
    const [adresse,setAdresse] = useState("");
    const [speciality,setSpeciality] = useState("");
    const [profile,setProfile] = useState("");
    const [personnalInfo , setPersonalInfo] = useState({});
    useEffect(()=>{
         setPersonalInfo({image,firstName,lastName,email,telephone,adresse,speciality,profile});
    },[image,firstName,lastName,email,telephone,adresse,speciality,profile]);
    sendData(personnalInfo);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
        }
      };
    console.log(personnalInfo);
  return (
    <section className='personnal-info-section'>
       <div className="flex gap-5 flex-wrap">
        <div className="mb-3 flex flex-col w-[80%]">
            <label htmlFor="image" className='font-[500] mb-1'>image</label>
            <input type="file" onChange={handleImageUpload} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2'/>
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="firstName" className='font-[500] mb-1'>First Name</label>
           <input type="text" placeholder='enter your first name' onChange={(e)=>setFirstName(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="lastName" className='font-[500] mb-1'>Last Name</label>
           <input type="text" placeholder='enter your last name' onChange={(e)=>setLastName(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="email" className='font-[500] mb-1'>Email</label>
           <input type="text" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="telephone" className='font-[500] mb-1'>telephone</label>
           <input type="tele" placeholder='enter your telephone' onChange={(e)=>setTelephone(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="adresse" className='font-[500] mb-1'>adresse</label>
           <input type="text" placeholder='enter your adresse' onChange={(e)=>setAdresse(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="speciality" className='font-[500] mb-1'>speciality</label>
           <input type="text" placeholder='enter your speciality' onChange={(e)=>setSpeciality(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[80%]">
            <label htmlFor="profile">Profile</label>
        <textarea placeholder='enter your profile summary' onChange={(e)=>setProfile(e.target.value)} className='bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2' cols="30" rows="10"></textarea>
        </div>
       </div>
    </section>
  )
}

export default PersonnalInfo