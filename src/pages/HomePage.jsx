

import HeroPage from '../sections/Hero';
import AboutPage from '../sections/About';
import ProjectPage from '../sections/Project';
import { ReactComponent as DanielText } from '../images/Daniel.svg';
import { ReactComponent as Ighodaro } from '../images/Ighodaro.svg';
import SkillsPage from '../sections/Skills';
import FooterPage from '../sections/Footer';
import GlassContainer from '../components/GlassContainer';
import Bg from '../images/bg.png';
import { useEffect, useState } from 'react';


const HomePage = () => {
 

  const[isMovedUp,setIsMovedUp]=useState(true);

useEffect(()=>{

if(window.scrollY==0)
{

  setIsMovedUp(false);

}

else{

  setIsMovedUp(true);

}



});


const hide="fixed w-20 h-20 rounded-full  items-center justify-center z-[999] text-white bottom-5 right-4 hidden";
const show="fixed w-20 h-20 rounded-full  items-center justify-center z-[999] text-white bottom-5 right-4 flex";





  return (
    <div className='overflow-hidden w-screen relative '>
<GlassContainer class={ isMovedUp?show:hide } name="up"  />

<div className='sm:flex hidden'>

    <GlassContainer class="p-10 absolute rounded-full w-[485px] h-[485px] sm:-right-72 -right-5 top-[900px]"/>
    <GlassContainer class="p-10 absolute rounded-full w-[85px] h-[85px] sm:right-92 -right-4 top-[1690px] z-[1]"/>
    <GlassContainer class="p-10 absolute rounded-full w-[85px] h-[85px] left-12 top-[1690px] sm:flex hidden z-[1]"/>
    <GlassContainer class="p-10 absolute rounded-full w-[85px] h-[85px] left-12 top-[2090px] z-[1]"/>

    </div>

    <div className='absolute top-[100px] opacity-60 z-[0]'>
<Ighodaro/></div>
<div className='absolute top-[590px]  opacity-60 z-[0]'>
<DanielText/></div>
    
    <div className='bg-background absolute w-screen h-[1768px] z-[-7] '></div>
<HeroPage/>

<section className="bg-background h-full z-[999] ">

<AboutPage/>
<ProjectPage/>
<SkillsPage/>
<FooterPage/>


</section>
     
    </div>

  );
}

export default HomePage;
