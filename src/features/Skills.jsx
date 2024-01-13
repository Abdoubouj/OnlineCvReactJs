import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
const Skills = ({ sendData }) => {
  const [skills, setSkills] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(1);
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState(0);
  const [error,setError] = useState({});
  const handleClick = () => {
    if(skill && level){
      if (!isUpdate) {
        const checkSkill = skills.find(s=>s.skill === skill);
        if(!checkSkill){
          setSkills([...skills, { id, skill, level: parseInt(level) }]);
          setSkill("");
          setLevel(0);
          setId((prev) => prev + 1);
          delete error.repeatError;
        }else{
          setError({...error,repeatError:"skill is already exist"})
        }
    } else {
      setSkills((prev) => {
        return prev.map((s) => {
          if (s.id === id) {
            return { ...s, ...{ id, skill, level: parseInt(level) } };
          }
          return s;
        });
      });
      setSkill("");
      setLevel(0);
      setId(skills.length + 1);
      setIsUpdate(false);
    }
    delete error.message;
  }else{
    if(!error['message']){
      setError({...error,message:"skill or level does't filled"})
    }
  }
  };
  console.log(error);
  const handleUpdate = (s) => {
    setIsUpdate(true);
    setId(s.id);
    setSkill(s.skill);
    setLevel(s.level);
  };
  const handleRemove = (skillId) => {
    setSkills([...skills.filter((s) => s.id !== skillId)]);
    setIsUpdate(false);
    setSkill("");
    setLevel(0);
    setId(skills.length + 1);
  };
  console.log(skills);
  sendData(skills);
  return (
    <section className="skills-section">
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
      <div className="flex gap-5 flex-wrap justify-center">
        <div className="mb-3 flex flex-col w-[80%]">
          <label
            htmlFor="skill"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Skill
          </label>
          <input
            type="text"
            placeholder="enter your skill"
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 relative flex flex-col w-[80%]">
          <label
            htmlFor="level"
            className="font-[700]  text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Level
          </label>
          <input
            type="range"
            min={0}
            max={100}
            placeholder="enter"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
            className="bg-slate-50 dark:bg-slate-800"
          />
          <span className="absolute -top-[10px] left-[48%] bg-mainColor px-7 py-2 rounded-lg text-slate-50">{level}%</span>
        </div>
        <ul className="errors w-[80%] bg-red-600 text-red-100 font-[600] text-[15px] rounded-md">
        {error.message &&
          <li className="m-2"> {error.message}</li>
        }
        {error.repeatError &&
          <li className="m-2">{error.repeatError}</li>
        }
        </ul>
      </div>
      <div className="text-center mt-5">
        <button
          className={`${
            isUpdate ? "bg-green-600" : "bg-mainColor"
          } hover:opacity-80 transition-all duration-300 text-slate-50 rounded-md px-5 py-2 capitalize`}
          onClick={handleClick}
        >
          {isUpdate ? (
            <span className="flex items-center justify-center gap-3">
              <FiEdit className="text-[20px]" /> update skill
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <MdAddCircleOutline className="text-[20px]" /> add skill
            </span>
          )}
        </button>
      </div>
      <div className="show-skills-list flex items-center flex-wrap gap-3 mt-5">
        {skills.map((s) => (
          <div
            className="skill-item border-[1px] border-mainColor rounded-md"
            key={s.id}
          >
            <div className="skill dark:bg-slate-700 font-[800] py-1 text-center rounded-t-lg bg-slate-100 capitalize text-mainColor">
              {s.skill}
            </div>
            <div className="level py-2 text-center dark:text-slate-50">{s.level}%</div>
            <hr />
            <div className="actions flex gap-2 items-center p-2">
              <button
                className="border-[1px] border-green-600 rounded-lg text-green-600 p-2"
                onClick={() => {
                  handleUpdate(s);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="border-[1px] border-red-600 rounded-lg text-red-600 p-2"
                onClick={() => {
                  handleRemove(s.id);
                }}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
