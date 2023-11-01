import React from 'react'
import 'aos/dist/aos.css';
// import Modal from './Modal';
import { useEffect } from 'react';
import { useState } from 'react';
import { faThermometer1,faNavicon,faClose  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectsArray from './ProjectsArray.js';








const ProjectsDisplay = ({name}) => {

const[isModal,setIsModal]=useState(false);
const[isModalActive,setIsModalActive]=useState(" ");



if(isModal)
{


    document.body.classList.add('overflow-y-hidden');
}
else{



    document.body.classList.remove('overflow-y-hidden');
}



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

const Allprojects=ProjectsArray;
    
console.log(ProjectsArray);


  return (
    <>
      
{Allprojects.map((item)=>(  {item.id}  ))}

    <div className={ProjectClass+"Ui"} data-aos="fade-down" onClick={()=>{setIsModalActive("Ui1"); setIsModal(true)}} > <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692607334827-4da64dcf2221?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard </p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Ui"} data-aos="fade-down" onClick={()=>{setIsModalActive("Ui2"); setIsModal(true)}}> <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg  w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard</p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Js"} data-aos="fade-down" onClick={()=>{setIsModalActive("Js"); setIsModal(true)}}> <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard</p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Rt"} data-aos="fade-down" onClick={()=>{setIsModalActive("Rt"); setIsModal(true)}}> <div className="absolute   w-full h-full bg-gradient-to-b from-transparent to-black"></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute bottom-0 p-5 text-white'>
    <p>-Dashboard</p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Php"} data-aos="fade-down" onClick={()=>{setIsModalActive("Php"); setIsModal(true)}} > <div className="absolute w-full h-full  bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>touched  </p>
    <small>url</small>
</div>    </div>

<div className={ProjectClass+"Rt"} data-aos="fade-down" onClick={()=>{setIsModalActive("Rt"); setIsModal(true)  }}> 
<div className="absolute w-full h-full  bg-gradient-to-b from-transparent to-black "></div> 
<img src="https://images.unsplash.com/photo-1692610492938-37a4eed63ac0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
    <p>Dashboard</p>
    <small>hi url</small>
</div>    </div>


{ isModal ? ( <div className={" flex items-center justify-center  sm:w-[900px] w-full h-full absolute z-[999]"}>
      
    <div className="lg:w-[40%] h-[600px] p-4 rounded-lg w-[90%] fixed bg-background top-[50px] flex flex-col items-center justify-start gap-10 " id="modal">
    <div className="flex items-end justify-end p-4  w-full"> 
    <FontAwesomeIcon icon={faClose} color="white" onClick={()=> {setIsModal(false)}   }/>
    </div>
    
    <div className="flex flex-col h-96 p-5 items-center gap-5">   
    <div className={"w-64 h-74 relative hover:opacity-80 delay-150 hover:shadow-xl transition-all new-transition duration-900 rounded-lg "} data-aos="fade-down"> <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src="https://images.unsplash.com/photo-1692607334827-4da64dcf2221?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D" className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
        <p>Dashboard </p>
        <small>url</small>
    </div>    </div>
    
    <h1 className='text-hover-blue font-bold text-xl '>Project Name</h1>
    <p className='text-center text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta sint sunt perferendis sequi iste quaerat expedita minus accusantium rem inventore architecto commodi, dolor cupiditate voluptatibus aperiam placeat nam repellat.</p>
    <small></small>
    <hr />
    
    <button  className=' w-40 h-60 rounded-xl bg-btn-blue text-white p-1 items-center justify-center '>
    View Project
    </button>
    
    </div>
    
    
    </div>
    
    
    
    <div className='fixed inset-0 glass-circle transition-opacity z-[-1]  bottom-[-40px] top-[-2000px]' onClick={()=> {setIsModal(false)}   }>
   </div>

    
    
        </div>):null}




    </>
  )
}

export default ProjectsDisplay
