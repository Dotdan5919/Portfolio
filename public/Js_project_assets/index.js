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


    {   question:"What is stigma in the context of healthcare ?",
        answers:[
            { text:"A medical treatment for mental health disorders",correct:false},
            { text:"Positive attitudes and beliefs about certain conditions.",correct:false},
            { text:"Negative attitudes, beliefs, and stereotypes towards certain conditions  or identities.",correct:true},
            { text:"A type of healthcare insurance",correct:false},

        ]

    }
    ,
    {   question:"How does stigma impact the health of people who inject drugs (PWID)?",
    answers:[
        { text:" Stigma has no effect on the health of PWID.",correct:false},
        { text:" Stigma encourages PWID to seek medical help promptly.",correct:false},
        { text:"Stigma may deter PWID from seeking healthcare services.",correct:true},
        { text:"Stigma leads to improved treatment adherence among PWID.",correct:false},

    ]

},
{

    question:"Why was John hesitant to seek care?",
    answers:[
        { text:" He had no health issues that required medical attention.",correct:false},
        { text:"He had a previous positive experience with a healthcare provider.",correct:false},
        { text:"He was receiving care from a community health center.",correct:false},
        { text:"He experienced stigma from a healthcare provider in the past.",correct:true}

    ]


},
{

    question:"What positive experience did John have at the community health center?",
    answers:[
        { text:" He was treated poorly and faced discrimination.",correct:false},
        { text:"He was turned away without any explanation",correct:false},
        { text:"He received non-judgmental and supportive care.",correct:true},
        { text:"He was denied access to healthcare services.",correct:false}

    ]


},
{

    question:"What lesson does John's case scenario teach us about access to healthcare services for people who inject drugs (PWID)?",
    answers:[
        { text:"Providing non-judgmental and supportive care is crucial for PWID's health.",correct:true},
        { text:"Stigmatizing healthcare providers are the only option for PWID.",correct:false},
        { text:"People who inject drugs should avoid seeking any healthcare services.",correct:false},
        { text:"People who inject drugs can only access care from large hospitals.",correct:false}

    ]


},
{

    question:"What is the primary purpose of using person-first language when referring to people who inject drugs?",
    answers:[
        { text:"To emphasize their drug use as a defining characteristic.",correct:false},
        { text:"To stigmatize and label individuals based on their behavior.",correct:false},
        { text:"To humanize and prioritize the individual over their behavior.",correct:true},
        { text:"To make their drug use the central topic of conversation. ",correct:false}

    ]


},
{

    question:"How does person-first language contribute to reducing stigma?",
    answers:[
        { text:"It highlights the behavior over the individual.",correct:false},
        { text:"It reinforces stereotypes and negative attitudes. ",correct:false},
        { text:"It prioritizes the individual over their condition or behavior.",correct:true},
        { text:"It encourages focusing solely on the behavior. ",correct:false}

    ]


}






];

let ChosenAnswers=[{question:"Begin your first Assesment?",value:"",Iscorrect:""},
{question:"What is stigma in the context of healthcare ?",value:"",Iscorrect:""},

{question:"How does stigma impact the health of people who inject drugs (PWID)?",value:"",Iscorrect:""},
{question:"Why was John hesitant to seek care?",value:"",Iscorrect:""},
{question:"What positive experience did John have at the community health center?",value:"",Iscorrect:""},
{question:"What lesson does John's case scenario teach us about access to healthcare services for people who inject drugs (PWID)?",value:"",Iscorrect:""},
{question:"What is the primary purpose of using person-first language when referring to people who inject drugs?",value:"",Iscorrect:""},
{question:"How does person-first language contribute to reducing stigma?",value:"",Iscorrect:""}


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

           
            
            for (let i = 1; i <= allAnswers.length; i++) {
                
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
                
                
                
            for (let i = 0; i <= allAnswers.length; i++) {

                console.log(allAnswers[i].question);
                
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


         
let form=document.querySelector(".hiddenForm").submit();

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
    allQuestions=questions.slice(3,6);
allAnswers=ChosenAnswers.slice(3,6);
QuestionIndex=0;
answerDividen=allQuestions.length;
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

    
};