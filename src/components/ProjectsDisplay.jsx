import React from 'react'
import 'aos/dist/aos.css';
import Modal from './Modal';
import { useEffect } from 'react';
import { useState } from 'react';
import { faThermometer1 } from '@fortawesome/free-solid-svg-icons';



const ProjectsDisplay = ({name}) => {

const[isModal,setIsModal]=useState(false);
const[isModalActive,setIsModalActive]=useState(" ");

useState(()=>
{

    if(isModal===true)
    {

        alert("hi");
        <Modal />

    }


},[])






    let ProjectClass="w-64 h-74 relative hover:opacity-80 delay-150 hover:shadow-xl transition-all new-transition duration-900 rounded-lg ";
    let uiElements=document.querySelectorAll(".Ui");
    let jsElements=document.querySelectorAll(".Js");
    let rtElements=document.querySelectorAll(".Rt");
    let phpElements=document.querySelectorAll(".Php");



  
    

    switch(name)
    {
        case "All":

        uiElements.forEach(element => element.style.display = "flex");
        jsElements.forEach(element => element.style.display = "flex");
        rtElements.forEach(element => element.style.display = "flex");
        phpElements.forEach(element => element.style.display = "flex");

        break;
        case "Ui":

        uiElements.forEach(element => element.style.display = "flex");
        jsElements.forEach(element => element.style.display = "none");
        rtElements.forEach(element => element.style.display = "none");
        phpElements.forEach(element => element.style.display = "none");

        break;
        case "Js":

        uiElements.forEach(element => element.style.display = "none");
        jsElements.forEach(element => element.style.display = "flex");
        rtElements.forEach(element => element.style.display = "none");
        phpElements.forEach(element => element.style.display = "none");

        break;
        case "React":

        uiElements.forEach(element => element.style.display = "none");
        jsElements.forEach(element => element.style.display = "none");
        rtElements.forEach(element => element.style.display = "flex");
        phpElements.forEach(element => element.style.display = "none");

        break;
        case "Php":

        uiElements.forEach(element => element.style.display = "none");
        jsElements.forEach(element => element.style.display = "none");
        rtElements.forEach(element => element.style.display = "none");
        phpElements.forEach(element => element.style.display = "flex");

        break;





        default:



    }





  return (
    <>
      
{isModalActive?"hi":"no"}
    <div className={ProjectClass+"Ui"} data-aos="fade-down" onClick={()=>{setIsModal("Ui1"); setIsModalActive(true)}} > <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692607334827-4da64dcf2221?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard </p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Ui"} data-aos="fade-down" onClick={()=>{setIsModal("Ui2"); setIsModalActive(true)}}> <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg  w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard</p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Js"} data-aos="fade-down" onClick={()=>{setIsModal("Js"); setIsModalActive(true)}}> <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard</p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Rt"} data-aos="fade-down" onClick={()=>{setIsModal("Rt"); setIsModalActive(true)}}> <div className="absolute   w-full h-full bg-gradient-to-b from-transparent to-black"></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute bottom-0 p-5 text-white'>
    <p>-Dashboard</p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Php"} data-aos="fade-down" onClick={()=>{setIsModal("Php"); setIsModalActive(true)}} > <div className="absolute w-full h-full  bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>touched  </p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Rt"} data-aos="fade-down" onClick={()=>{setIsModal("Rt"); setIsModalActive(true)  }}> 
<div className="absolute w-full h-full  bg-gradient-to-b from-transparent to-black "></div> 
<img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard</p>
    <small>hi url</small>
</div>    </div>







    </>
  )
}

export default ProjectsDisplay
