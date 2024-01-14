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
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
       <div className="flex flex-col md:flex-row gap-5 justify-center flex-wrap">
        <div className="mb-3 flex flex-col w-[300px] sm-w-full md:w-[82%]">
            <label htmlFor="image" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2'>image</label>
            <input type="file" onChange={handleImageUpload} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2'/>
        </div>
        <div className="mb-3 flex flex-col w-full md:w-[40%]">
           <label htmlFor="firstName" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 '>First Name</label>
           <input type="text" placeholder='enter your first name' onChange={(e)=>setFirstName(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-full md:w-[40%]">
           <label htmlFor="lastName" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 '>Last Name</label>
           <input type="text" placeholder='enter your last name' onChange={(e)=>setLastName(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-full md:w-[40%]">
           <label htmlFor="email" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 '>Email</label>
           <input type="text" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-full md:w-[40%]">
           <label htmlFor="telephone" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 '>telephone</label>
           <input type="tele" placeholder='enter your telephone' onChange={(e)=>setTelephone(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-full md:w-[40%]">
           <label htmlFor="adresse" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 '>adresse</label>
           <input type="text" placeholder='enter your adresse' onChange={(e)=>setAdresse(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-full md:w-[40%]">
           <label htmlFor="speciality" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 '>speciality</label>
           <input type="text" placeholder='enter your speciality' onChange={(e)=>setSpeciality(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
        </div>
        <div className="mb-3 flex flex-col w-[82%]">
            <label htmlFor="profile" className='font-[700] dark:text-slate-100 text-slate-900 capitalize mb-2 ' >Profile</label>
        <textarea placeholder='enter your profile summary' onChange={(e)=>setProfile(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' cols="20" rows="5"></textarea>
        </div>
       </div>
    </section>
  )
}

export default PersonnalInfo