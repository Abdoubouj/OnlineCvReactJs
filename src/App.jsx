import './App.css'
import Header from './components/Header'
import {Routes , Route} from "react-router-dom"
import PersonnalInfo from './features/PersonnalInfo'
import Educations from './features/Educations'
import Experiences from './features/Experiences'
import Skills from './features/Skills'
import Languages from './features/Languages'
import { useState } from 'react'
import Preview from './components/Preview'
function App() {
  const [personnalInfoData , setPersonnalInfoData] = useState({});
  const [skillsData,setSkillsData] = useState([]);
  const handleDataFromPersonnalInfo = (data)=>{
    setPersonnalInfoData(data)
  }
  const handleDataFromSkills = (data)=>{
    setSkillsData(data)
  }
  console.log(skillsData);
  return (
    <>
    <Header/>
    <main className='flex p-2 dark:bg-slate-800'>
      <div className="content-left p-2 flex-1">
    <Routes>
      <Route path='/' element={<PersonnalInfo sendData={handleDataFromPersonnalInfo}/>}/>
      <Route path='/educations' element={<Educations/>}/>
      <Route path='/experiences' element={<Experiences/>}/>
      <Route path='/skills' element={<Skills sendData={handleDataFromSkills}/>}/>
      <Route path='/languages' element={<Languages/>}/>
    </Routes>
      </div>
    <div className="content-right rounded-md shadow-2xl shadow-slate-950 dark:shadow-slate-50 w-[600px] flex-2">
      <Preview personnalInfo={personnalInfoData}/>
    </div>
    </main>
    </>
  )
}

export default App
