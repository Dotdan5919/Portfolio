import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

const Btn = ({name,myClass,iconDisplay}) => {

  let _Class="w-full flex gap-2 items-center  text-white p-2 transition duration-700 ease-out rounded-tr-2xl ";
  let newClass= myClass+ " " +_Class;



  return (

    <div>
    { name ==='Hire me'?(
    <button className={newClass} >
    
    <FontAwesomeIcon icon={faDownload} className={iconDisplay}/>
    <Link  to="footer" smooth={true} 
    offset={50} 
    duration={500}> {name} </Link>
   
    
    </button>

    ):(<a href='./docs/web-dev-cv.pdf' download='web-dev-cv'>
    <button className={newClass} >
    
    <FontAwesomeIcon icon={faDownload} className={iconDisplay}/>
    {name}
   
    
    </button>

    </a>)}
    </div>


  )
}

export default Btn
