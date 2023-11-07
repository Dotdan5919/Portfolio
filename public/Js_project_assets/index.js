window.onload=function(){


var Text2=document.querySelector('.calculator .screen h1');
var Text1=document.querySelector('.calculator .screen h5');
var number=document.querySelectorAll(".calculator  div .btn-num");
var operator=document.querySelectorAll(".calculator  div .btn-op");
var sum=document.querySelector(".calculator  div .sum");
var clear=document.querySelector(".c");
var boolSum="false";
var keyFreezer="false";
var opFreezer="true";
var del=document.querySelector(".btn-del");
var btnSymbol=document.querySelector(".btn-symbol");


btnSymbol && btnSymbol.addEventListener('click',function(e)






{


    
   
    if(Text2.textContent.charAt(0)=== "-" )
{     
    Text2.textContent=Text2.textContent.replace('-','');
   


}
    else{

        Text2.prepend("-");


    }




});



del && del.addEventListener('click',function(e)


{   
   

    


    
    Text2.textContent=Text2.textContent.slice(0,-1);
    



}



)





    

   
 












if (Text2 && Text2.textContent==="")
{

boolSum="false";
var opFreezer="true";
var keyFreezer="false";

}


clear && clear.addEventListener('click', function()

{

    Text2.textContent="";
    Text1.textContent="";



})

operator.forEach(function(operator)
{



    operator.addEventListener('click',
    
        
    function(e)
    
    
    
    
    {
        var value=e.target.textContent;
    
        if(Text2.textContent==="")
        {
            

        }
        else{

            if(opFreezer=="false"){


       

            if(Text2.textContent.charAt(Text2.textContent.length - 1) == value )
            {




            }
            else{

                Text2.append(value);
                opFreezer="true";
                boolSum="false";
                keyFreezer="true";

            }


        }


        }






    })


}





)





sum && sum.addEventListener('click',function()




{

    var sum=Text2.textContent;

 
    var op= eval(sum);
  

     Text2.textContent=op;
     Text1.textContent=sum;
     boolSum="true";
     keyFreezer="false";
     opFreezer="false";

     






})







number.forEach(function(number) {
    

    


    number.addEventListener('click',function(e)
    {
        
var value=e.target.textContent;
    

        if(Text2.textContent==="")
        {
            Text2.textContent=value;
           
     opFreezer="false";
            
        }
        else if(Text2.textContent!=="")
        {

            opFreezer="false";

            if(boolSum=="true")
            {
                Text2.textContent=value;
                boolSum="false";
                

            }
            else{
            
            if(Text2.textContent.length<8){

                
            Text2.append(value);
            
            
                    


                
            }
        }
        }
        

   
    
    
    })
    



});



   



// to do app

var AddTask=document.querySelector(".add-task");

var addBtn=document.querySelector(".add-task-btn");
var Tasks=document.querySelector(".all-tasks");

AddTask && AddTask.addEventListener('click',function(e)
{

    
})

addBtn && addBtn.addEventListener
('click',function(e)
{

var exist="false";
var val=AddTask.value;

if(val==""){
    
}
else{



var taskChecker=document.querySelectorAll(".task label");


taskChecker.forEach(function(taskChecker)
{
    

if(taskChecker.textContent==val)
{
    
    window.alert("to do already exists");
    exist="True";
   
}
else{
    

}




}






)
if(exist=="false"){
    

    var div=document.createElement("div");
    var input= document.createElement("input");
    var label= document.createElement("label");
    var input= document.createElement("input");
    var span= document.createElement("span");
    var i= document.createElement("i");
    var divTask=Tasks.appendChild(div);
    divTask.className="task";
    
    var todoChecker=divTask.appendChild(input);
    todoChecker.id="task-checker";
    todoChecker.type="checkbox";
    
    var labeller=divTask.appendChild(label);
    labeller.setAttribute("for","task-checker");
    labeller.textContent=val;
    
    var parentSpan=divTask.appendChild(span);
    parentSpan.className="x";
    var icon=parentSpan.appendChild(i);
    icon.classList="fa fa-close";
    
    
    icon.addEventListener('click',function(e)
    
    {

        e.target.parentElement.parentElement.remove();

    }
    
    
    
    
    
    )
}
else{


}








}

}



)
;


var close= document.querySelectorAll(".task span");









close.forEach(function(close)



{
   

close && close.addEventListener('click',function(e)







{

    
    var delElement=close.parentElement.remove();
    













})





}


)


// quiz app





const questions=[
     {   question:"Begin your first Assesment",
answers:[
   

]

},
    {
        
        question: "What is the capital of France?",
        answers: [
          { text: "Paris", correct: true },
          { text: "London", correct: false },
          { text: "Berlin", correct: false },
          { text: "Rome", correct: false },
        ],
      },
      {
        question: "What is the largest ocean in the world?",
        answers: [
          { text: "Pacific Ocean", correct: true },
          { text: "Atlantic Ocean", correct: false },
          { text: "Indian Ocean", correct: false },
          { text: "Arctic Ocean", correct: false },
        ],
      },
      {
        question: "What is the highest mountain in the world?",
        answers: [
          { text: "Mount Everest", correct: true },
          { text: "K2", correct: false },
          { text: "Kanchenjunga", correct: false },
          { text: "Lhotse", correct: false },
        ],
      },
      {
        question: "What is the most populous country in the world?",
        answers: [
          { text: "China", correct: true },
          { text: "India", correct: false },
          { text: "United States", correct: false },
          { text: "Indonesia", correct: false },
        ],
      },
      {
        question: "What is the chemical formula for water?",
        answers: [
          { text: "H2O", correct: true },
          { text: "CO2", correct: false },
          { text: "O3", correct: false },
          { text: "NH3", correct: false },
        ],
      },
      {
        question: "What is the name of the largest moon in our solar system?",
        answers: [
          { text: "Ganymede", correct: true },
          { text: "Titan", correct: false },
          { text: "Callisto", correct: false },
          { text: "Io", correct: false },
        ],
      },
      {
        question: "What is the name of the planet that is closest to the sun?",
        answers: [
          { text: "Mercury", correct: true },
          { text: "Venus", correct: false },
          { text: "Earth", correct: false },
          { text: "Mars", correct: false },
        ],
      },
      {
        question: "What is the name of the most venomous snake in the world?",
        answers: [
          { text: "Inland taipan", correct: true },
          { text: "Death adder", correct: false },
          { text: "Eastern brown snake", correct: false },
          { text: "Black mamba", correct: false },
        ],
      },


];

let ChosenAnswers=[{question:"What is the capital of France?",value:"", Iscorrect:""},
{question:"What is the largest ocean in the world?",value:"",Iscorrect:""},

{question:"What is the highest mountain in the world?",value:"",Iscorrect:""},
{question:"What is the most populous country in the world?",value:"",Iscorrect:""},
{question:"What is the chemical formula for water?",value:"",Iscorrect:""},


{question:"What is the name of the largest moon in our solar system?",value:"",Iscorrect:""},
{question:"What is the name of the planet that is closest to the sun?",value:"",Iscorrect:""},
{question:"What is the name of the most venomous snake in the world?",value:"",Iscorrect:""}


];


let allQuestions="";
let allAnswers="";
let answerDividen="";
// declare variables

var answers=document.querySelector('.answers');
var QuestionIndex=0;
var score=0;
var previous=document.getElementById('previous');

let id_val=document.querySelector('.id');
let id=0;

if(id_val){
     id=id_val.textContent;

}




// all functions
function startQuiz()
{
QuestionIndex=0;
score=0;




}
function showSingleQuestion(Q){
let questionElement=document.querySelector('.question p');

    var currentQuestion= questions[Q];
    var questionNo= QuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    resetAnswers();

    currentQuestion.answers.forEach( function(x,answerIndex)


    {    
       
       


        let InputGroup=document.querySelector(".modal-body .answers");
        

        let div= document.createElement("div"); //create div
        let input= document.createElement("input"); //create input

        input.required="required";



        let InputNew=InputGroup.appendChild(div);  //include div
        InputNew.className="input-group";  //give div a classname
        let label = document.createElement("label") ;
        let inputed=InputNew.appendChild(input);
       







      
        

        inputed.value=x.text; //add text to the radio


        

        input.type="radio";
        input.name=currentQuestion.question;
        input.id=answerIndex;
       
     
        
        label.setAttribute('for',answerIndex);

        // label.for=answerIndex;
        label.innerHTML=x.text;
        InputNew.appendChild(label);
        let correct=x.correct;
        
        allAnswers.forEach(function(y)
        {
          if(y.value==x.text) 
          {
            input.checked="checked";
           

          }
           
           


        });
        
        

        inputed  && inputed.addEventListener("focus",function(e){
            e.preventDefault();

           
            
            for (let i = 0; i <= allAnswers.length; i++) {
                
                if(allAnswers[i].question===currentQuestion.question)
                {
                    
                    allAnswers[i].value=e.target.value;
                   
                    allAnswers[i].Iscorrect=correct;
                   

                }




              }


         
           


        }
        
        )
       


        




        answerIndex+=1;


    }
    


        
    )

}
function showQuestion(Q,no_limit)
{
   

    


    if(no_limit<=Q){


        

        
    let questionElement=document.querySelector('.question p');

    var currentQuestion= questions[Q];
    var questionNo= QuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
     
    
  
     let answerIndex=0;
     
     resetAnswers();
     
 
    currentQuestion.answers.forEach( function(x,answerIndex)


    {    
       
       


        let InputGroup=document.querySelector(".modal-body .answers");
        

        let div= document.createElement("div"); //create div
        let input= document.createElement("input"); //create input

        input.required="required";



        let InputNew=InputGroup.appendChild(div);  //include div
        InputNew.className="input-group";  //give div a classname
        let label = document.createElement("label") ;
        let inputed=InputNew.appendChild(input);
       







     
        

        inputed.value=x.text; //add text to the radio


        

        input.type="radio";
        input.name=currentQuestion.question;
        input.id=answerIndex;
       
     
        
        label.setAttribute('for',answerIndex);

      
        label.innerHTML=x.text;
        InputNew.appendChild(label);
        let correct=x.correct;
        
        allAnswers.forEach(function(y)
        {
          if(y.value==x.text) 
          {
            input.checked="checked";
          

          }
           
           


        });
        
        

        input && inputed.addEventListener("focus",function(e){
             e.preventDefault();
           
            
            for (let i = 1; i <= allAnswers.length; i++) {
                
                if(allAnswers[i].question==currentQuestion.question)
                {
                    
                    allAnswers[i].value=e.target.value;
                   
                    allAnswers[i].Iscorrect=correct;
                    

                }




              }


         
           


        }
        
        )
       


        





        answerIndex+=1;


    }
    


        
    )

}


else{


}


}
function showMultipleQuestion(Q,allQuestions)
{
   

    


        if(Q<=allQuestions.length){

        
    let questionElement=document.querySelector('.question p');
   
    var currentQuestion= allQuestions[Q];
   
    var questionNo= QuestionIndex + 1;
   
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
  
    
    
     let answerIndex=0;
     
     resetAnswers();
     
 
    currentQuestion.answers.forEach( function(x,answerIndex)


    {    
      
       


        let InputGroup=document.querySelector(".modal-body .answers");
        

        let div= document.createElement("div"); //create div
        let input= document.createElement("input"); //create input

        input.required="required";



        let InputNew=InputGroup.appendChild(div);  //include div
        InputNew.className="input-group";  //give div a classname
        let label = document.createElement("label") ;
        let inputed=InputNew.appendChild(input);
       







   
        

        inputed.value=x.text; //add text to the radio


        

        input.type="radio";
        input.name=currentQuestion.question;
        input.id=answerIndex;
       
     
        
        label.setAttribute('for',answerIndex);

   
        label.innerHTML=x.text;
        InputNew.appendChild(label);
        let correct=x.correct;
        
        allAnswers.forEach(function(y)
        {
          if(y.value===x.text) 
          {
            input.checked="checked";
     
            
          }
           
           


        });
        
        

        inputed.addEventListener("change",function(e){
         e.preventDefault();
           
        
            if( inputed.checked){
                
                
                
            for (let i = 0; i < allAnswers.length; i++) {

               
                
                if(allAnswers[i].question===currentQuestion.question)
                {
                    
                    allAnswers[i].value=e.target.value;
                   
                    allAnswers[i].Iscorrect=correct;
                    

                }




              }

}
         
           


        }
        
        )
       


        



        


        answerIndex+=1;


    }
    


        
    )




}
else{

    
}

}
function resetAnswers()
{


    let allAnswers=document.querySelectorAll(".modal-body .answers .input-group ");
      
        let allAnswer=document.querySelector(".modal-body .answers");
        


       
        Array.from(allAnswers).forEach(function(allAnswer_)
        {
            
             allAnswer_.remove();
            


        })
   






}
function submit(Q)
{
    
    let ansCounter=0;
    let result=0;
    allAnswers.forEach(
function(x)
{

    

    if(x.Iscorrect==true)
    {

        result+=1;
        

    }
else{
    
    
    
}


ansCounter+=1;

}





)



let finalresult=(result/(answerDividen))*100;
let roundResult=Math.round(finalresult);
let questionElement=document.querySelector('.question p');

questionElement.remove();
let resultElement=document.querySelector('.question');
let h1= document.createElement("h1"); //create h1

h1.setAttribute('class','text-center') ;//set class attribute to the element created above
h1.innerHTML=roundResult + "%";

let inputAssesment=document.querySelector("#assesment");

inputAssesment && inputAssesment.setAttribute("value",finalresult);

let inputResult=resultElement.appendChild(h1); 
h1.style.fontSize="140px";

previous.style.display="flex";
previous.textContent="Retake test";

next.textContent="Continue";
next.type="submit";

let answers=document.querySelectorAll('.answers .input-group');

Array.from(answers).forEach(function(x)

{

    x.remove();


}

)





}




      
    let next=document.getElementById("next");
    // let previous=document.getElementById("previous");
    

   

   next && next.addEventListener("click",(e)=>
    {
       
         e.preventDefault();
        
       
     

    
     if(next.textContent=="Submit")
    {

        submit(QuestionIndex);
        

        




    }

    else if(next.textContent=="Continue")
    {


         
        location.reload();

    }
   else{

          
      if(QuestionIndex<allQuestions.length-1){

             
            QuestionIndex+=1;
          
            
          
           showMultipleQuestion(QuestionIndex,allQuestions);
     
         
     
     
          
           
            
     
     
     
        
         }
else if(QuestionIndex==allQuestions.length) {


    
    

    
     submit(QuestionIndex);
    
    

}

else{
    submit(QuestionIndex);
    
}



         
         
     
   }
  
    
    });


    previous && previous.addEventListener("click",(e)=>
    {

    
    
        if(QuestionIndex==0 && previous.textContent=="Retake test")
        {

      

        location.reload();
        
        }
        else if(previous.textContent=="Retake test")
        {

          
            location.reload();

        }
        else{
            
            QuestionIndex-=1;
           
           
            showMultipleQuestion(QuestionIndex,allQuestions);
           
       
           
        }
       
    
    
    });




let allRadio=document.querySelectorAll(".modal-body .answers .input-group input");


Array.from(allRadio).forEach(function(x){

    
    x.addEventListener("change",function(e){
        
         
         if(x.checked){
        
            allQuestions[QuestionIndex].answers.forEach(function(x){

                let text=x.text;
                let correct=x.correct;

         
       
        
                if(x.text==e.target.value){

                    allAnswers[QuestionIndex].value=text;
                    allAnswers[QuestionIndex].Iscorrect=correct;
                    

                }
                
   
                
                

            })

            
            

}


         


     
       


    })



})











let question_limit=0;

switch(id)
{

 
case "1":    
allQuestions=questions.slice(1,2);
allAnswers=ChosenAnswers.slice(1,2);
answerDividen=allQuestions.length;

  


showMultipleQuestion(QuestionIndex,allQuestions);



   previous.style.display="none";
 

 
  






break;
case "2":


  

allQuestions=questions.slice(2,3);
allAnswers=ChosenAnswers.slice(2,3);
QuestionIndex=0;
answerDividen=allQuestions.length;
 showMultipleQuestion(QuestionIndex,allQuestions);

 previous.style.display="none";

   
break;
case "3":
    allQuestions=questions.slice(0,8);
allAnswers=ChosenAnswers.slice(0,8);
QuestionIndex=0;
answerDividen=allQuestions.length-1;
 showMultipleQuestion(QuestionIndex,allQuestions);

 


  
 
   
break;
case "4":
    allQuestions=questions.slice(6,8);
allAnswers=ChosenAnswers.slice(6,8);
QuestionIndex=0;
answerDividen=allQuestions.length;
 showMultipleQuestion(QuestionIndex,allQuestions);




break;


default:
    



}




function timer()
{

  
}


timer();





// weather app



const Url="https://api.openweathermap.org/data/2.5/weather?q=";
const ApiKey="4e0a5e84af693647051d59129d15b8dc";
var city=document.querySelector('.weather-input')   ;
var weatherSubmit=document.querySelector('.weather-submit');


async function checkWeather(city)
{
    const response= await fetch(Url + city + '&appid=' + ApiKey );
    var data =await response.json();


    console.log(data);

    document.querySelector('.country').innerHTML=data.name + ", " + data.sys.country;
    document.querySelector('.temperature').innerHTML=Math.round(data.main.temp - 273.15) + "°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('.wind-speed-text').innerHTML=data.wind.speed;
   



  







}

weatherSubmit && weatherSubmit.addEventListener("click",function()


{
    cityValue=city.value;

checkWeather(cityValue)







})









    
};