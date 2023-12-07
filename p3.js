function sbmit(){
  if(document.getElementById("m1").checked==true){
    document.getElementById("gen").innerHTML="Male";
   }
    else if(document.getElementById("f1").checked==true){
    document.getElementById("gen").innerHTML="Female";
   }
   else{
    document.getElementById("gen").innerHTML="---not selected---";
   }

   if(document.getElementById("check1").checked==true){
    document.getElementById("game1").innerHTML="<br><li>cricket</li><br>"
   }
   else{
    document.getElementById("game1").innerHTML=" "
   }
   if(document.getElementById("check2").checked==true){
    document.getElementById("game2").innerHTML="<br><li>football</li><br>"
   }
   else{
    document.getElementById("game2").innerHTML=" "
   }

   if(document.getElementById("check3").checked==true){
    document.getElementById("game3").innerHTML= "<br><li>vollyboll</li> <br>"
   }
   else{
    document.getElementById("game3").innerHTML=" "
   }

//************************************************************************************************************* */ 
if(fristName.value==""){
    document.getElementById("show").innerHTML="please enter the frist name";
  
 }
 else{
  document.getElementById("show").innerHTML="";
 }
 if(lastName.value==""){
  document.getElementById("show1").innerHTML="please enter the last  name";

 }
 else{
  document.getElementById("show1").innerHTML="";
 }
  if(phone.value==""){
    document.getElementById("show2").innerHTML="please enter  your mobile number ";
  }
  else{
    document.getElementById("show2").innerHTML="";
   }
   if(DoB.value==""){
    document.getElementById("show3").innerHTML="please enter  your date of birth ";
  }
  else{
    document.getElementById("show3").innerHTML="";
    let a=document.getElementById("box");
    a.style.display="none";
  }
//************************************************************************************************* */
   document.getElementById("frName").innerHTML= fristName.value +" "+lastName.value;
   document.getElementById("phon").innerHTML= phone.value;
   document.getElementById("dob").innerHTML=+ DoB.value;
   document.getElementById("text").innerHTML=+notic.value;

 
}

