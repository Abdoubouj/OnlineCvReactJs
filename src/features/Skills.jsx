import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const Skills = ({ sendData }) => {
  const [skills, setSkills] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(1);
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState(0);

  const handleClick = () => {
    if (!isUpdate) {
      setSkills([...skills, { id, skill, level: parseInt(level) }]);
      setSkill("");
      setLevel(0);
      setId((prev) => prev + 1);
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
      setId(skills.length + 1)
      setIsUpdate(false);
    }
  };
  const handleUpdate = (s) => {
    setIsUpdate(true);
    setId(s.id);
    setSkill(s.skill);
    setLevel(s.level);
  };
  const handleRemove = (skillId) => {
    setSkills([...skills.filter((s) => s.id !== skillId)]);
  };
  console.log(skills);
  sendData(skills);
  return (
    <section className="skills-section">
      <div className="flex gap-5 flex-wrap">
        <div className="mb-3 flex flex-col w-[80%]">
          <label htmlFor="skill" className="font-[500] mb-1">
            Skill
          </label>
          <input
            type="text"
            placeholder="enter your skill"
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
            className="bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[80%]">
          <label htmlFor="level" className="font-[500] mb-1">
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
            className="bg-slate-50 focus:outline-0 placeholder:text-mainColor placeholder:text-[14px] focus:border-b-[2px] focus:border-mainColor px-3 py-2"
          />
          {level}
        </div>
      </div>
      <button
        className="bg-mainColor text-slate-50 rounded-md px-5 py-2"
        onClick={handleClick}
      >
        {isUpdate ? "update skill" : "add skill"}
      </button>
      <div className="show-skills-list flex items-center gap-3 mt-5">
        {skills.map((s) => (
          <div
            className="skill-item border-[1px] border-mainColor rounded-md"
            key={s.id}
          >
            <div className="skill text-center bg-mainColor capitalize text-slate-50">
              {s.skill}
            </div>
            <div className="level py-2 text-center">{s.level}%</div>
            <hr />
            <div className="actions flex gap-2 items-center p-2">
              <button
                className="bg-green-700 rounded-lg text-slate-50 p-2"
                onClick={() => {
                  handleUpdate(s);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="bg-red-700 rounded-lg text-slate-50 p-2"
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
