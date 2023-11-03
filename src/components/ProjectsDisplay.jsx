import React from 'react'
import 'aos/dist/aos.css';
// import Modal from './Modal';
import { useEffect } from 'react';
import { useState } from 'react';
import { faThermometer1,faNavicon,faClose  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectsArray from './ProjectsArray.json';

import { Link } from 'react-router-dom';








const ProjectsDisplay = ({name}) => {

const[isModal,setIsModal]=useState(false);
const[isUrl,setIsUrl]=useState(false);

const[isModalActive,setIsModalActive]=useState(" ");
let ProjectName=" ";
            let ProjectImage=" ";
            let ProjectDescription=" ";
            let ProjectUrl=" ";
            let ProjectId=" ";

            

            ProjectsArray.forEach(x=>   
                {
                    if(isModalActive===x.projectId){ 
                     ProjectName=x.name;
                     ProjectImage=x.image;
                     ProjectDescription=x.description;
                     ProjectUrl=x.url;
                     ProjectId=x.projectId;
                    
                        
        
        
                    
                }
        
        
               
                }
                )


 useEffect((ProjectId)=>

 {
   
    
  
    
     })



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

    // const Project= JSON.parse(ProjectsArray);

console.log(ProjectsArray)

  return (
    <>
      
   { ProjectsArray.map(projectarray =>{ 
    return(
    <div className={ProjectClass+ projectarray.projectType}  onClick={()=>{setIsModalActive(projectarray.projectId); setIsModal(true);
    
        (projectarray.url==="")?setIsUrl(false):setIsUrl(true)
    
    }} > <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src={projectarray.image} className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
   <p>{projectarray.name}</p>
   <small></small>
</div>   </div> )
} )}
       



{ isModal && ( <div className={" flex items-center justify-center  sm:w-[900px] w-full h-full absolute z-[999]"}>
      
    <div className="lg:w-[60%] lg:h-fit items-center justify-center sm:p-3 p-2 max-h-max  rounded-lg w-[90%] fixed bg-background sm:top-[50px] top-[0px] flex flex-col items-center justify-start sm:gap-10 gap-4 " id="modal">
    <div className="flex items-end justify-end   w-full"> 
    <FontAwesomeIcon icon={faClose} color="white" onClick={()=> {setIsModal(false)}   }/>
    </div>
    
    <div className="flex md:flex-row py-5 flex-col lg:h-full h-auto p-2 justify-center m items-center gap-4">   
    <div className={"md:w-[400px] md:h-[400px] w-4/5 h-4/5 relative hover:opacity-80 delay-150 hover:shadow-xl transition-all new-transition duration-900 rounded-lg "} > <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black "></div> <img src={ProjectImage} className='object-cover rounded-lg w-full h-full' alt="" />  <div className='absolute text-white bottom-0 p-5'>
        <p>{ProjectName} </p>
        <small></small>
    </div>    </div>
    <div className='md:w-[50%] w-4/5 flex sm:gap-5 gap-2 flex-col text-start '>
    <h1 className='text-hover-blue font-bold text-xl '>{ProjectName}</h1>
    <p className='text-start text-white sm:text-sm text-[12px] leading-relaxed '>{ProjectDescription}</p>
    <small></small>

    <hr />
     <button href={ProjectUrl} className=' w-40 h-50 rounded-xl bg-btn-blue text-white p-1 items-center justify-center '>

     {isUrl?(<Link  to={ProjectUrl} > View Project </Link> ) :( <a  href={"/"+ProjectId} > View Project </a>)}
   
    </button>
    </div>
    
    </div>
    
    
    
    </div>
    
    
    
    <div className='fixed inset-0 glass-circle transition-opacity z-[-1]  bottom-[-40px] top-[-2000px]' onClick={()=> {setIsModal(false)}   }>
   </div>

    
    
        </div>)}




    </>
  )
}

export default ProjectsDisplay
