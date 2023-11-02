import React from 'react';
import Dan2 from '../images/Daniel-2.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import CreativeDirector from '../images/Creative Director.svg';
import Btn from '../components/Btn';


const AboutPage = () => {

    AOS.init();
  return (

    


    <div className='flex  md:flex-row flex-col-reverse  py-[50px]  md:mr-[120px] mr-auto   items-center relative justify-center gap-20 ' id="about">


    <img src={CreativeDirector} className="absolute opacity-30 top-0 z-[0]"    alt="" srcset="" />
      
<div className=' h-[455px] w-[300px]   overflow-hidden'>  
<img src={Dan2} alt="" srcset=""  className='h-[760px] w-[1200px] object-cover' data-aos="fade-down"/>

</div>

<div className="text flex justify-between flex-col gap-10 ">
<div className="flex flex-col gap-6 sm:w-[600px] w-96 sm:p-0 p-2">  
<h1 className='text-[40px] text-bold text-white'>About me</h1>
<p className='text-white text-sm'>

I am a web developer with over one year of experience in web development and UI design. I have a strong understanding of the full web development stack, including PHP, Laravel, React, Bootstrap, Tailwind, HTML, CSS, Git, GitHub, and Figma.
</p> 
<p className='text-white text-sm'>
I am proficient in building and maintaining high-quality web applications, and I have a passion for creating user-friendly and visually appealing interfaces. I am also a team player and I am always eager to learn new things.
</p>

<p className='text-white text-sm'>I am looking for a challenging and rewarding position as a web developer where 
I can use my skills and knowledge to build innovative and user-friendly web applications. 
I am confident that I have the skills and experience necessary to be a valuable asset 
to your team. I look forward to hearing from you soon.</p>
 </div>

<div className="flex gap-3 z-[2]" data-aos="fade-down">  
<Btn name="Hire me" iconDisplay="hidden" myClass="border-2 border-white w-44 hover:bg-white hover:text-btn-blue flex justify-center" />
<Btn name="Download Cv"  myClass="bg-btn-blue hover:bg-hover-blue hover:shadow-lg w-44 flex justify-center gap-4" />
</div>


</div>

    </div>
  )
}

export default AboutPage
