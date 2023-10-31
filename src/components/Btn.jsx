import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Btn = ({name,myClass,iconDisplay}) => {

  let _Class="w-full flex gap-2 items-center  text-white p-2 transition duration-700 ease-out rounded-tr-2xl ";
  let newClass= myClass+ " " +_Class;

  return (
  
    <button className={newClass}>
    
    <FontAwesomeIcon icon={faDownload} className={iconDisplay}/>
    {name}
    
    </button>




  )
}

export default Btn
