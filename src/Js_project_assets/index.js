window.onload=function(){

function myFunction(){   
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
    // var lastEL=Text2[Text2.length-1];

    


    
    Text2.textContent=Text2.textContent.slice(0,-1);
    



}



)




// percentage.addEventListener('click',function(e) {
//     var value=e.target.textContent;

    

   
    
//  if( Text2.textContent == "" )
// {

// }
// else{

//     if(opFreezer=="false")
//     {
        

        

//     }
//     else{

//         if(Text2.textContent.charAt(Text2.textContent.length - 1) == value ){

//             // window.alert("press a number or equals");

//         }

//        else{ 

//         Text2.append(value);
//         var opFreezer="true";
//     }

//     }




// }








// }  )



if (Text2.textContent==="")
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


            // var sample=Text2.textContent.charAt(Text2.textContent.length - 1);
            // console.log(sample);

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
    
// Text2.textContent=value
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
        

    
        // console.log(e.target.textContent);
    
    
    
    })
    



});



   



}


    
};