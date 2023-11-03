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
            console.log();
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

    console.log("i dey task");
})

addBtn && addBtn.addEventListener
('click',function(e)
{

var exist="false";
var val=AddTask.value;

if(val==""){
    console.log("i am empty");
}
else{

console.log("i am not empty");

var taskChecker=document.querySelectorAll(".task label");


taskChecker.forEach(function(taskChecker)
{
    console.log("i am for each");

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




    
};