
 
import React from 'react'
import NavBar from '../components/NavBarProject'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useEffect } from 'react';
import Projects from '../images/Projects.svg';
import GlassContainer from '../components/GlassContainer';






const SingleProject = () => {

 
  
const {id}=useParams();


let name="";
let description="";


let divContainer="";
let viewWebsite="";
let Tools="";


useEffect(()=>{

 
 


  
},[])
switch (id)
{  
case "1":

break;

case "4":
  divContainer=(
  
  
    <div className="calculator w-full ">

       <div className="screen">
        <h5 className='mb-4'>  </h5>
        <h1 className="main-text font-extrabold text-3xl"> </h1>

       </div>

       <div className="row1">
        <div className="c btn">C</div>
        <div className="add-and-subtract btn-symbol">+/-</div>
        <div className="percentage btn-del">DEL</div>
        <div className="slash orange btn-op">/</div>
       </div>
       <div className="row2">
        <div className="seven btn-num">7</div>
        <div className="eight btn-num">8</div>
        <div className="nine btn-num">9</div>
        <div className="multiply orange btn-op">*</div>
       </div>
       <div className="row3">
        <div className="four btn-num">4</div>
        <div className="five btn-num">5</div>
        <div className="six btn-num">6</div>
        <div className="minus orange btn-op">-</div>
       </div>
       <div className="row4">
        <div className="one btn-num">1</div>
        <div className="two btn-num">2</div>
        <div className="three btn-num">3</div>
        <div className="plus orange btn-op">+</div>
       </div>
       <div className="row5">
        <div className="zero btn-num">0</div>
        
        <div className="decimal-point btn-num">.</div>
        <div className="equals orange sum">=</div>
       </div>
</div>);

name="Calculator";
description="This app was developed using Vanilla javascript.I used basic DOM manipulation to achieve everything on this App";
Tools=( <div className='flex flex-col gap-5 '>   
<h1 className=" text-white text-lg font-bold ">Tools</h1><div className="tools flex flex-wrap gap-2" > 
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="html" aos=" " text="Html" />
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="css" aos=" "  text="Css"/>
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="js" aos=" "  text="Js"/>





</div> </div>);
break;

case "5":

divContainer=(<div className="todo-list h-20">
<div className="todo-app">
<h1>To-do list</h1>
<div action="">
<input type="text" className="add-task text-black" placeholder="Add your task"/>
<input type="submit" value="Add" className="add-task-btn bg-yellow-500"/>
</div>
<div className="all-tasks">


</div>

</div></div>
  
  );

name="To do List app";
description="This is a to do list application, created using DOM manipulation in Javascript. It helps keep track of what you intend doing and what you have done";
Tools=(
  <div className='flex flex-col gap-5 '>   
  <h1 className=" text-white text-lg font-bold ">Tools</h1>
  
  <div className="tools flex flex-wrap gap-2" > 
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="html" aos=" " text="Html" />
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="css" aos=" "  text="Css"/>
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="js" aos=" "  text="Js"/>





</div> </div>);
break;

case "6":
divContainer=(<div class="weather-app  flex items-start justify-start">




<div class="weather-app-container">

    <div class="input-group"> 
    <input type="text" 
    placeholder="search"
     class="search weather-input"/>
        <div class="search-circle btn-group weather-submit">
    <i class="fa fa-search"></i>
</div>

</div>
<div class="weather-status flex flex-col justify-center items-center"> 
<div class="weather-icon"> 
<i class="fa fa-cloud fa-4x"> </i>


</div>

<h1 class="temperature">0°C</h1>
<p className='country'>country</p>

</div>

<div class="bottom-status">
    <div class="humidity-container flex items-center justify-center gap-3">
    <div class="humidity-icon">
    <i class="fa fa-thermometer-empty fa-3x"></i>
</div>
<div class="humidity-text ">
    <h5 class="humidity font-bold text-[25px]">0</h5>
    <p>Humidity</p>

</div>
</div>


<div class="wind-speed-container flex items-center gap-3 justify-center">

    <div class="wind-speed-icon">
        <i class="fa fa-mixcloud fa-3x" ></i>

    </div>
    <div class="wind-speed">
<div className="flex flex-col">
<div className="flex items-center justify-cente gap-1">
<h5 class="wind-speed-text font-bold text-[25px]">
    0 

</h5>
<p className='lowercase text-xs'> m/s</p>
</div>

<p>Wind <br /> Speed</p>
</div>

    </div>


</div>




</div>



</div>






</div>)
name="Weather App";
description="This App was created using DOM manipulation and weather API. It's an app that is able to generate the current temperature of any city in the world. All you have to do is type the name of the city in the search box and the app gives you the Temprature,Humidity and Wind Speed ";
Tools=(
  <div className='flex flex-col gap-5 '>   
  <h1 className=" text-white text-lg font-bold ">Tools</h1>
  <div className="tools flex flex-wrap gap-2" > 
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="html" aos=" " text="Html" />
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="css" aos=" "  text="Css"/>
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="js" aos=" "  text="Js"/>
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex justify-center font-bold text-lg "  aos=" "  text="API"/>




</div></div>);
break;

case "7":
  divContainer=( <div className="  my-modal" >
  <div className="card bg-white h-auto">
      <div className="w-96">
          <div className="head bg-btn-blue "> <h4>Quiz app</h4>
          </div>

          <div className="modal-body">  
              <div className="question">       
              <p className='text-btn-blue '>     Test Begin ?   </p>
              </div>
                  <div className="answers">   
                    

                   
                    <div className="hidden id" >3</div>
                       
              </div>
            
              <div className="navigations">
                  <button className="navigation p-2 m-2 rounded-md previous bg-btn-blue" id="previous">Previous</button>
                  <button className="navigation p-2 m-2 rounded-md next  bg-btn-blue" id="next">Next</button>


              </div>

              
                  
                
              
          </div>
          



      </div>

  </div>
</div>
    
    );
  
  name="Quiz app";
  description="This Application is a simple quiz app, developed with Js, it displays various questions and sums your results in percentage.";
  Tools=( <div className='flex flex-col gap-5 '>   
  <h1 className=" text-white text-lg font-bold ">Tools</h1>
    
    <div className="tools flex flex-wrap gap-2" > 
  <GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="html" aos=" " text="Html" />
  <GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="css" aos=" "  text="Css"/>
  <GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="js" aos=" "  text="Js"/>

  
  
  </div>
  </div>);

  break;


case "9":
  divContainer=(<div>
    <video src=""></video>
    </div>
    
    );
   viewWebsite=(<Link className=' w-40 h-50 rounded-xl bg-btn-blue text-white p-1 items-center flex justify-center' exact to="www.projectholistique.com">View website</Link>);
  
  name="BETTER SUPPORT FOR SKIN AND SOFT TISSUE INFECTIONS FOR PEOPLE WHO INJECT DRUGS";
  description="Developed the backend of a website using PHP Laravel, including an admin panel and mini chatting system. The website allows users to create and manage accounts, post and view content, and communicate with each other through the mini chat system. The admin panel provides administrators with the ability to manage users, content, and settings.";
Tools=(
  
  <div className='flex flex-col gap-5 '>   
<h1 className=" text-white text-lg font-bold ">Tools</h1>
<div className="tools flex flex-wrap gap-2" > 
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="html" aos=" " text="Html" />
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="css" aos=" " text="Css" />



<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="js" aos=" "  text="Js"/>
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="php" aos=" "  text="Php"/>
<GlassContainer class="w-[140px] h-[100px] rounded-xl items-center p-2 flex flex-col " name="laravel" aos=" "  text="Laravel"/>


</div>
</div>);


break;

default:


}






  return (
  

<section className="bg-background w-[100vw] h-[100vh] relative">


<NavBar/>
<div className="bg-background z-[-999] absolute  w-full h-[100vh] "></div>
<img src={Projects} alt="" srcset="" className='absolute lg:left-60 left-0 right-0 opacity-30' />
<GlassContainer class="p-10 absolute rounded-full w-[85px] h-[85px] left-9 top-[190px] z-[1]" aos=""/>
<GlassContainer class="p-10 absolute rounded-full w-[85px] h-[85px] right-10 -bottom-[10px] z-[1]" aos=""/>

<div className="  w-[80%] mx-auto  h-full flex gap-7  items-start pt-28  md:flex-row flex-col  justify-center ">

<div className="flex items-start justify-center gap-5 sm:flex-row flex-col ">  
<div className="container  w-fit h-auto rounded-lg  ">
{divContainer}
</div>
<div className="content flex   flex-col gap-2 text-start align-top justify-start items-start lg:w-[500px]">  
<h1 className='font-bold text-white text-2xl'> {name}</h1>
<p className='text-white '>
{description}
</p>

{viewWebsite}
<hr className='bg-white' />

{Tools}




</div>

<div>




</div>



</div>

</div>





</section>






  )
}

export default SingleProject
