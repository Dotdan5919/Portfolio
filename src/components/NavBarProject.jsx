import React from 'react'
import Btn from './Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon,faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom'


const NavBar = () => {

    let isActive;
const[activeNav,setActiveNav]=useState(false);

    let nav=document.getElementById('nav');
    const navClassesHidden="gap-[70px] text-[20px] item-center   flex  max-[689px]:absolute z-[999px]     transition duration-700  hidden  lg:flex ";
    const navClasses="gap-[48px]  flex  flex-col text-[20px] lg:py-0 lg:px-0  py-20  px-5 lg:relative tablet:top-0 lg:gap-[70px] lg:flex-row  top-[-20px] lg:top-[0px] right-0  absolute  z-[999px]  transition duration-700  bg-background lg:bg-transparent  lg:h-auto lg:w-auto h-[900vh] w-[50vw]  ";
  


    
    

  return (
    <div  className='w-full flex justify-between p-7 text-white relative z-[12] '>
     <h1 className='hover:text-hover-blue transition duration-700 cursor-default text-[20px]'>  <Link to='/'>
        Dani-<span className='font-bold'> El </span> </Link></h1>
   
     <ul className={activeNav ?navClasses :navClassesHidden} id='nav'  >
        <li className='hover:text-hover-blue transition duration-700 cursor-default text-[20px] '><Link exact to="/" >  Home</Link></li>
        <li className='hover:text-hover-blue transition duration-700 cursor-default text-[20px] '><a   href="home#about" >  About me </a > </li>
        <li className='hover:text-hover-blue transition duration-700 cursor-default text-[20px] '><Link  exact to="/home#project" >  Projects </Link ></li>
        <li className='hover:text-hover-blue transition duration-700 cursor-default text-[20px] '><Link  exact to="/home#contact" >  Contact </Link ></li>
        <li>
        
        <Btn name="Download Cv" myClass="bg-btn-blue hover:bg-hover-blue hover:shadow-lg" />
        </li>
    </ul>
    

    <FontAwesomeIcon icon={activeNav? faClose: faNavicon} size="2xl" onClick={()=>{ activeNav?  setActiveNav(false) : setActiveNav(true) }} className='hover:text-hover-blue transition duration-700 cursor-default  lg:hidden flex z-[12] '/>


  
    



    </div>




  )
}

export default NavBar
