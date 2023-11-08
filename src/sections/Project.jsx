import React from 'react';
import AOS from 'aos';
import Btn from '../components/Btn';
import Projects from '../images/Projects.svg';
import 'aos/dist/aos.css';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { useState } from 'react';
import Modal from '../components/Modal';


const ProjectPage = () => {
    AOS.init();
    const[skillName,setSkillName]=useState("All");

    let projectParent=" ";

  return (
    <div className='flex flex-col gap-5 justify-center items-center  py-[50px]' id="project">
    <img src={Projects} alt="" srcset="" className='absolute opacity-30' />
    
<h1 className='text-[40px] text-bold text-white'>Projects</h1>
<div className="nav flex gap-6 text-white z-10 ">

<p className='w-full p-2 transition  duration-10 ease-in-out rounded-md cursor-default cursor-default hover:border-2 ' onClick={()=>{setSkillName("All")}}>All</p>
  
    <p className='w-full p-2 transition  duration-10 ease-in-out rounded-md cursor-default cursor-default hover:border-2 ' onClick={()=>{setSkillName("Ui")}}>Ui</p>
    <p className='w-full p-2 transition  duration-10 ease-in-out rounded-md cursor-default cursor-default hover:border-2 ' onClick={()=>{setSkillName("Js")}}>Js</p>
    <p className='w-full p-2 transition  duration-10 ease-in-out rounded-md cursor-default hover:border-2 ' onClick={()=>{setSkillName("React")}}>React</p>
    <p className='w-full p-2 transition  duration-10 ease-in-out rounded-md cursor-default cursor-default hover:border-2 ' onClick={()=>{setSkillName("Php")}}>Php/Laravel</p>
</div>
<div className={projectParent+"flex flex-wrap   justify-center  px-[102px]  lg:w-[1200px] w-auto h-Full  gap-10"}  >
   

<ProjectsDisplay name={skillName}/>


</div>



    </div>
  )
}

export default ProjectPage
