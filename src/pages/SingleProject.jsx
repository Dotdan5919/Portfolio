
 
import React from 'react'
import NavBar from '../components/NavBarProject'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { useEffect } from 'react';




const SingleProject = () => {

 
  
const {id}=useParams();


let name="";
let description="";


let divContainer="";


useEffect(()=>{

 
 


  
},[])
switch (id)
{  
case "1":

break;

case "4":
  divContainer=(
  
  
    <div class="calculator w-full ">

       <div class="screen">
        <h5 className='mb-4'>  </h5>
        <h1 class="main-text font-extrabold text-3xl"> </h1>

       </div>

       <div class="row1">
        <div class="c btn">C</div>
        <div class="add-and-subtract btn-symbol">+/-</div>
        <div class="percentage btn-del">DEL</div>
        <div class="slash orange btn-op">/</div>
       </div>
       <div class="row2">
        <div class="seven btn-num">7</div>
        <div class="eight btn-num">8</div>
        <div class="nine btn-num">9</div>
        <div class="multiply orange btn-op">*</div>
       </div>
       <div class="row3">
        <div class="four btn-num">4</div>
        <div class="five btn-num">5</div>
        <div class="six btn-num">6</div>
        <div class="minus orange btn-op">-</div>
       </div>
       <div class="row4">
        <div class="one btn-num">1</div>
        <div class="two btn-num">2</div>
        <div class="three btn-num">3</div>
        <div class="plus orange btn-op">+</div>
       </div>
       <div class="row5">
        <div class="zero btn-num">0</div>
        
        <div class="decimal-point btn-num">.</div>
        <div class="equals orange sum">=</div>
       </div>
</div>);

name="Calculator";
description="lorem     l l l l     l ll  ";

break;

case "5":

divContainer=(<div class="todo-list"><div class="todo-app">
<h1>To-do list</h1>
<div action="">
<input type="text" class="add-task" placeholder="Add your task"/>
<input type="submit" value="Add" class="add-task-btn bg-yellow-500"/>
</div>
<div class="all-tasks">

<div class="task">
<input type="checkbox" name="" id="task-checker"/ >
<label class="" for="task-checker">Cooking</label>
<span class="x"><i class="fa fa-close "></i></span>

</div>

</div>

</div></div>
  
  );

name="To do List app";
description="lorem     l l l l     l ll  ";

break;




default:


}






  return (
  

<section className="bg-background w-full h-full">

<NavBar/>


<div className="w-[100vw] h-full flex gap-7 p-10 items-center sm:flex-row flex-col justify-center">



<div className="container  w-fit h-96 rounded-lg ">
{divContainer}
</div>
<div className="content flex flex-col gap-2 text-start align-top justify-start items-start sm:w-[600px]">  
<h1 className='font-bold text-white text-2xl'> {name}</h1>
<p className='text-white '>
{description}
</p>


</div>
</div>



</section>






  )
}

export default SingleProject
