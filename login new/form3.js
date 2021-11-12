let world=document.getElementById("world");
  let exampleInputPassword1=document.getElementById("exampleInputPassword1");

  function validate(){
    let pregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(pregexp.test(exampleInputPassword1.value)){
        world .innerHTML="valid Password";
        world.style.color="green";
        return true;
    }

    else{
        world.innerHTML="invalid Password";
        world.style.color="red";
        world.style.textAlign="right";
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