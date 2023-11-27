import React from 'react'
import NavBar from '../components/NavBar'
import Daniel   from '../images/Daniel.png'
import GlassContainer from '../components/GlassContainer'
import Sidedesign from '../images/side_design.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';










const HeroPage = () => {
  
  return (
    <div className=' lg:px-[30px] px-2  min-height-100vh w-full relative  sm:py-0 py-5 ' id="hero">
    <div className="hero w-full h-full bg-teal-100  absolute -left-8 sm:flex hidden z-[-5] opacity-20"></div>
<NavBar/>
<div className="blur z-[0] absolute top-[-500px] left-[-300px]  "></div>
<div className="blur z-[0] absolute top-[20px] left-[900px]  "></div>

<div className="h-auto  flex w-full  lg:justify-center justify-between sm:gap-20 gap-2 sm:my-0 my-6 items-center flex-col lg:flex-row  "> 


<div className='flex '> 
<img src={Sidedesign} alt="" srcset="" className='h-70  hidden lg:flex' data-aos="fade-up" />
<div className='  h-full flex flex-col justify-center mx-5 sm:mx-0   z-3'>

<div className="text flex items-start  flex-col">
<h5 className='text-[40px] md:text-[60px] xl:text-[62px]  text-white  h-12 ' data-aos="fade-left">Ighodaro



</h5>
<h1 className='text-[94px] md:text-[100px] xl:text-[124px] font-bold text-hover-blue  ' data-aos="fade-right">Daniel</h1>






</div>

<p className='text-white text-[40px] ' >Web  Developer    </p>
</div>
</div>
<div className="relative"> 
<div className="blur-light absolute w-[359px] h-[359px] left-[220px] bottom-[120px]" data-aos="fade-up"></div>
<div className="blur-light absolute w-[159px] h-[159px] left-[120px] bottom-[120px]" data-aos="fade-up"></div>

<GlassContainer name="css" class="absolute left-[390px] top-[260px] sm:w-[150px] sm:h-[150px] w-[80px] h-[80px]  p-2  z-[-1] rounded-full justify-center items-center"/>
<GlassContainer name="figma" class="absolute top-[570px] left-[250px]  sm:w-[140px] sm:h-[140px] w-[100px] h-[100px] rounded-full justify-center items-center"/>
<GlassContainer name="php" class="absolute top-[420px] left-[350px] sm:w-[166px] sm:h-[166px] w-[90px] h-[90px] rounded-full justify-center items-center"/>
<GlassContainer name="laravel" class="absolute right-[300px] bottom-[440px] sm:w-[156px] z-[-1] w-[120px]  h-[120px]  sm:h-[156px] rounded-full justify-center items-center"/>
<GlassContainer name="html" class="absolute right-[380px] bottom-[240px] sm:w-[186px] z-[-1] sm:h-[186px] w-[120px] h-[120px]  rounded-full justify-center items-center"/>
<GlassContainer name="js" class="absolute  sm:w-[206px] right-[300px] bottom-[90px] z-[0] sm:h-[206px] w-[170px] h-[170px] rounded-full justify-center items-center"/>

<GlassContainer name="react" class="absolute  sm:w-[156px] z-[-1] sm:h-[156px] left-[350px] top-[100px] w-[120px] h-[120px] rounded-full justify-center items-center"/>
<div className='overflow-hidden h-[700px] w-[600px] '>



<img src={Daniel} alt="" className=' w-[753px] h-[800px]  ' />

</div>
</div>








</div>












    </div>
  )
}

export default HeroPage
