import React, { useState } from 'react'

const Educations = () => {
  const [id,setId] = useState(1);
  const [school,setSchool] = useState("");
  const [degree,setDegree] = useState("");
  const [field ,setField] = useState();
  const [startDate ,setStartDate] = useState();
  const [endDate ,setEndDate] = useState();
  return (
       <section className="skills-section">
      <div className="flex gap-5 flex-wrap">
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="school"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            school
          </label>
          <input
            type="text"
            placeholder="enter school name"
            value={school}
            onChange={(e) => {
              setSchool(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="degree"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            degree
          </label>
          <input
            type="text"
            placeholder="enter your degree"
            value={degree}
            onChange={(e) => {
              setDegree(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="field"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            field
          </label>
          <input
            type="text"
            placeholder="enter field of study "
            value={field}
            onChange={(e) => {
              setField(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="startDate"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            start date
          </label>
          <input
            type="date"
            placeholder="enter startDate name"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="endDate"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            end date
          </label>
          <input
            type="date"
            placeholder="enter endDate name"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        </div>
        </section>
  )
}

export default Educations