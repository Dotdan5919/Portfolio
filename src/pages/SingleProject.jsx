
 
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
description="lorem     l l l l     l ll  ";

break;

case "5":

divContainer=(<div className="todo-list"><div className="todo-app">
<h1>To-do list</h1>
<div action="">
<input type="text" className="add-task text-black" placeholder="Add your task"/>
<input type="submit" value="Add" className="add-task-btn bg-yellow-500"/>
</div>
<div className="all-tasks">

<div className="task">
<input type="checkbox" name="" id="task-checker" />
<label className="" for="task-checker">Cooking</label>
<span className="x"><i className="fa fa-close "></i></span>

</div>

</div>

</div></div>
  
  );

name="To do List app";
description="lorem     l l l l     l ll  ";

break;


case "7":
  divContainer=( <div className="col-md-8 my-modal" >
  <div className="card">
      <div className="">
          <div className="head"> <h4>Module One: Assessment </h4>
          </div>

          <div className="modal-body">  
              <div className="question">       
              <p>     What is stigma in the context of healthcare ?   </p>
              </div>
                  <div className="answers">   
                    

                   
                    <div className="hide id" >3</div>
                       
              </div>
            
              <div className="navigations">
                  <button className="navigation btn previous" id="previous">Previous</button>
                  <button className="navigation btn next btn-learn-more" id="next">Next</button>


              </div>

              
                  
                
              
          </div>
          



      </div>

  </div>
</div>
    
    );
  
  name="Quiz app";
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
