import React from 'react'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon,faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const Modal = ({project}) => {
   
    const[modalActive,setModalActive]=useState(false);
    let activeClass=" glass-circle bg-teal flex items-center justify-center sm:w-[900px] w-full h-full absolute z-[999]";
    let inactiveClass=" glass-circle bg-teal flex items-center justify-center sm:w-[900px] w-full h-full hidden absolute z-[999]";
    useEffect(()=>{ 
     
  if(project==="Rt")
  {
    setModalActive(true)
   
  }

},[project])
    
  return (
    <div className={modalActive? activeClass :inactiveClass}>
      
<div className="sm:w-[50%] h-[90%] w-[70%]  bg-background flex flex-col items-center justify-start gap-10 " id="modal">
<div className="flex items-end justify-end p-4  w-full"> 
<FontAwesomeIcon icon={faClose} color="white" onClick={()=>{ modalActive?setModalActive(false) : setModalActive(true)   }}/>
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






    </div>
  )
}

export default Modal
