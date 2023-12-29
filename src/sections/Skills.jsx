import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dan from '../images/Daniel-3.png';
import 'aos/dist/aos.css';
import GlassContainer from '../components/GlassContainer';
import Skills from '../images/Skills.svg';


const SkillsPage = () => {

 
let skillsNo=1;
let skillsLeft;
let skillsRight;



switch(skillsNo)
{

case 1:
skillsLeft=(<div className="left-skills sm:left-auto left-10 flex flex-col gap-10 absolute z-[2] sm:w-[700px]  lg:w-[900px] lg:right-auto  " >

<GlassContainer name="html" class="lg:w-[383px] h-[10px]  lg:h-[110px]  w-[160px]  sm:w-[300px]  rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="Html" />
<GlassContainer name="css" class="lg:w-[383px]  h-[10px] lg:h-[110px]  w-[160px]  sm:w-[300px] rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="Css" />
<GlassContainer name="js" class="lg:w-[383px]  h-[10px] lg:h-[110px]   w-[160px] sm:w-[300px] rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="Javascript" />
<GlassContainer name="php" class="lg:w-[383px] h-[10px]  lg:h-[110px]  w-[160px] sm:w-[300px]  rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="PHP" />



 
</div>)

skillsRight=(<div className="right-skills right-10 sm:right-auto flex flex-col gap-10 absolute  sm:w-[700px]  z-[0] sm:left-auto  items-end lg:w-[900px] left-[200px]  ">
<GlassContainer name="figma" class="lg:w-[383px] h-[10px] w-[150px]  sm:w-[300px] lg:h-[110px]    rounded-lg  items-center p-[20px] py-[70px]  gap-5  items-end  flex-row-reverse" text="Figma" />
<GlassContainer name="tailwind" class="lg:w-[383px] h-[10px] w-[150px] sm:w-[300px]  lg:h-[110px]    rounded-lg  items-center p-[20px] py-[70px]  gap-5  items-end  flex-row-reverse" text="Tailwind" />
<GlassContainer name="react" class="lg:w-[383px] h-[10px] w-[150px]  sm:w-[300px] lg:h-[110px]     rounded-lg  items-center p-[20px] py-[70px]  gap-5 items-end  flex-row-reverse " text="React" />
<GlassContainer name="laravel" class="lg:w-[383px] h-[10px] w-[150px]  sm:w-[300px] lg:h-[110px]     rounded-lg  items-center p-[20px] py-[70px]  gap-5  items-end  flex-row-reverse" text="Laravel" />





</div>);


break;

case 2:
  skillsLeft=(<div className="left-skills sm:left-auto left-10 flex flex-col gap-10 absolute z-[2] sm:w-[700px]  lg:w-[900px] lg:right-auto  "  >

  <GlassContainer name="RestAPI" class="lg:w-[383px] h-[10px]  lg:h-[110px]  w-[160px]  sm:w-[300px]  rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="RestAPI" />
  <GlassContainer name="Firebase" class="lg:w-[383px]  h-[10px] lg:h-[110px]  w-[160px]  sm:w-[300px] rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="Firebase" />
  <GlassContainer name="Mysql" class="lg:w-[383px]  h-[10px] lg:h-[110px]   w-[160px] sm:w-[300px] rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="Mysql" />
  <GlassContainer name="Sql" class="lg:w-[383px] h-[10px]  lg:h-[110px]  w-[160px] sm:w-[300px]  rounded-lg  items-center p-[20px] py-[70px]  gap-5 " text="Sql" />
  
  
  
   
  </div>)
  
  skillsRight=(<div className="right-skills right-10 sm:right-auto flex flex-col gap-10 absolute  sm:w-[700px]  z-[0] sm:left-auto  items-end lg:w-[900px] left-[200px]  ">
  <GlassContainer name="framer-motion" class="lg:w-[383px] h-[10px] w-[150px]  sm:w-[300px] lg:h-[110px]    rounded-lg  items-center p-[20px] py-[70px]  gap-5  items-end  flex-row-reverse" text="Framer motion" />
  <GlassContainer name="tailwind" class="lg:w-[383px] h-[10px] w-[150px] sm:w-[300px]  lg:h-[110px]    rounded-lg  items-center p-[20px] py-[70px]  gap-5  items-end  flex-row-reverse" text="Tailwind" />
  <GlassContainer name="react" class="lg:w-[383px] h-[10px] w-[150px]  sm:w-[300px] lg:h-[110px]     rounded-lg  items-center p-[20px] py-[70px]  gap-5 items-end  flex-row-reverse " text="React" />
  <GlassContainer name="laravel" class="lg:w-[383px] h-[10px] w-[150px]  sm:w-[300px] lg:h-[110px]     rounded-lg  items-center p-[20px] py-[70px]  gap-5  items-end  flex-row-reverse" text="Laravel" />
  
  
  
  
  
  </div>);
  
  

break;

default:


}





  return (
    <div className=' w-full flex flex-col  items-center  ' id="skills">
      
    <h1 className='text-[40px] text-bold text-white  '>Skills</h1>

<div className="container flex   sm:justify-center justify-center   relative">
{skillsLeft}
<div className="  img-container w-[550px] h-[692px]   flex items-start mt-[20px] justify-center overflow-hidden z-[1] ">

<img src={Dan} alt="" className='w-[1800px] h-[1000px]  object-cover sm:flex hidden ' />
</div>

{skillsRight}





</div>

<div className="absolute opacity-30 z-[0]" >

<img src={Skills} alt="" />
</div>


    </div>
  )
}

export default SkillsPage
