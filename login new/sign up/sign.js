let email=document.getElementById("email");
let rain=document.getElementById("rain");
let apple=document.getElementById("apple");
let world=document.getElementById("world");
  let exampleInputPassword1=document.getElementById("exampleInputPassword1");
  let phone=document.getElementById("phone");
  var sky =document.getElementById("sky");  

  function validate(){
    let pregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let nregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let mregexp=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let e,p;

    if(pregexp.test(exampleInputPassword1.value)){
      e=true;
    }else{
      exampleInputPassword1.innerHTML="invalid";
      exampleInputPassword1.style.color="red";
    }
    if((nregexp.test(phone.value))){
        
        p=true;
    }else{
      sky.innerHTML="invalid phonenumber";
      sky.style.color="red";
      phone.style.color="red";
    }
    if((mregexp.test(email.value))){
       q=true;
    }
    else{
      rain.innerHTML="invalid email id";
      rain.style.color="red";
      email.style.color="red";
    }
    if((e==true && p==true && q==true) ){
      return true;
  }else {
      return false;
  }

 }
    



function strength(){
    var exampleInputPassword1 =document.getElementById("exampleInputPassword1");
    var green =document.getElementById("green");
    if(exampleInputPassword1.value.trim().length<6){
        green.innerHTML="Weak";
        green.style.color="red";
        exampleInputPassword1.style.border="2px solid red";
        exampleInputPassword1.style.outline="none";
    }
    if(exampleInputPassword1.value.trim().length>=6){
        green.innerHTML="Average";
        green.style.color="orange";
        exampleInputPassword1.style.border="2px solid orange";
        exampleInputPassword1.style.outline="none";
    }
    if(exampleInputPassword1.value.trim().length>=8){
        green.innerHTML="Good";
        green.style.color="green";
        exampleInputPassword1.style.border="2px solid green";
        exampleInputPassword1.style.outline="none";
    }
}



       
       


