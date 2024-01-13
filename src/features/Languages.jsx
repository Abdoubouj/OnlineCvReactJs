import React, { useState } from "react";
import { all_languages } from "../data/allLangagesData";
import { FiEdit } from "react-icons/fi";
import { MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
const Languages = ({sendData}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState(0);
  const [id, setId] = useState(1);

  const handleClick = () => {
    if(!isUpdate){
      setLanguages([...languages, { id, language, level: parseInt(level) }]);
      setLanguage("");
      setLevel(0);
      setId((prev) => prev + 1);
    }else{
      setLanguages(prev=>{
        return prev.map((lang)=>{
          if(lang.id === id){
            return {...lang,...{id,language,level:parseInt(level)}}
          }
          return lang
        })
      })
      setLanguage("");
      setLevel(0);
      setId(languages.length +1);
      setIsUpdate(false);
    }
  };
  const handleRemove = (langId) => {
    setLanguages([...languages.filter((lang) => lang.id !== langId)]);
    setIsUpdate(false);
    setLanguage("");
    setLevel(0);
    setId([...languages].length + 1);
  };
  const handleUpdate = (lang)=>{
       setIsUpdate(!isUpdate);
       setId(lang.id);
       setLanguage(lang.language);
       setLevel(lang.level);
       if(isUpdate){
        setLanguage("");
        setLevel(0);
        setId([...languages].length + 1)
       }
  }
  sendData(languages);
  console.log(languages);
  return (
    <section className="languages-section">
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
      <div className="flex gap-5 flex-wrap justify-center">
        <div className="mb-3 flex flex-col w-[80%]">
          <label
            htmlFor="language"
            className="font-[700] dark:text-slate-50 text-slate-900 capitalize mb-2"
          >
            Language
          </label>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            className="dark:bg-slate-800 dark:text-slate-100 border-[1px] border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          >
            <option value="chose language here">chose language here </option>
            {all_languages.map((lang, index) => (
              <option value={lang?.name} key={index}>
                {lang?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 relative flex flex-col w-[80%]">
          <label
            htmlFor="level"
            className="font-[700] dark:text-slate-50 text-slate-900 capitalize mb-2"
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
          <span className="absolute -top-[10px] left-[50%] bg-mainColor px-7 py-2 rounded-lg text-slate-50">
            {level}%
          </span>
        </div>
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
              <FiEdit className="text-[20px]" /> update language
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <MdAddCircleOutline className="text-[20px]" /> add language
            </span>
          )}
        </button>
      </div>
      <div className="show-languages-list flex items-center flex-wrap gap-3 mt-5">
        {languages.map((lang) => (
          <div
            className="language-item  border-[1px] border-slate-300 rounded-lg"
            key={lang.id}
          >
            <div className="language dark:bg-slate-700 py-1 text-center rounded-t-lg bg-slate-100 capitalize text-mainColor">
              {lang.language}
            </div>
            <div className="level dark:text-slate-50 py-2 font-bold text-center">
              {lang.level}%
            </div>
            <hr />
            <div className="actions flex gap-2 items-center p-2">
              <button
                className="border-[1px] border-green-600 rounded-lg text-green-600 p-2"
                onClick={() => {
                  handleUpdate(lang);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="border-[1px] border-red-600 rounded-lg text-red-600 p-2"
                onClick={()=>handleRemove(lang.id)}
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

export default Languages;
