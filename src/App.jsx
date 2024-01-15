import './App.css'
import Header from './components/Header'
import {Routes , Route} from "react-router-dom"
import PersonnalInfo from './features/PersonnalInfo'
import Educations from './features/Educations'
import Experiences from './features/Experiences'
import Skills from './features/Skills'
import Languages from './features/Languages'
import { useRef, useState } from 'react'
import Preview from './components/Preview'
import ReactToPrint from "react-to-print";
function App() {
  const [personnalInfoData , setPersonnalInfoData] = useState({});
  const [skillsData,setSkillsData] = useState([]);
  const [languagesData,setLanguagesData] = useState([]);
  const [educationsData,setEducationsData] = useState([]);
  const [experiencesData,setExperiencesData] = useState([]);
  const printRef = useRef();
  const handleDataFromPersonnalInfo = (data)=>{
    setPersonnalInfoData(data)
  }
  const handleDataFromSkills = (data)=>{
    setSkillsData(data)
  }
  const handleDataFromLanguages = (data)=>{
    setLanguagesData(data);
  }
  const handleDataFromEducations = (data)=>{
    setEducationsData(data);
  }
  const handleDataFromExperiences = (data)=>{
    setExperiencesData(data);
  }
  console.log(skillsData);
  return (
    <>
    <Header/>
    <main className='flex flex-col items-center xl:items-start xl:flex-row p-2 dark:bg-slate-800'>
      <div className="content-left p-2 flex-1">
    <Routes>
      <Route path='/' element={<PersonnalInfo sendData={handleDataFromPersonnalInfo}/>}/>
      <Route path='/educations' element={<Educations sendData={handleDataFromEducations} />}/>
      <Route path='/experiences' element={<Experiences sendData={handleDataFromExperiences}/>}/>
      <Route path='/skills' element={<Skills sendData={handleDataFromSkills}/>}/>
      <Route path='/languages' element={<Languages sendData={handleDataFromLanguages}/>}/>
    </Routes>
      </div>
    <div className="content-right h-[450px] sm:h-[800px] rounded-md shadow-2xl shadow-slate-950 dark:shadow-slate-50 w-[300px] sm:w-[800px] flex-2">
      <Preview ref={printRef} personnalInfo={personnalInfoData} skills={skillsData} languages={languagesData} educations={educationsData} experiences={experiencesData}/>
      <ReactToPrint
        // pageStyle={{ padding: "0", marging: "0" }}
        trigger={() => (
          <button className="border-0 text-slate-50 fw-bold rounded-md m-3 bg-mainColor py-2 px-5">
            download
          </button>
        )}
        content={() => printRef.current}
      />
    </div>
    </main>
    </>
  )
}

export default App
