let A = 8;  //Declare variables
let B =10;
//let B = 20; (can't redeclare) because in let variable as to be unique
let C = A+B;
 console.log(C);
 document.getElementById("let").innerHTML="Let datatype value: "+C;

 let D = "Welcome To ";
 let E = "Trignosys";
  E = "Trignosys World ." //Reassign will work 
  let F = D+E;
 console.log(F);
 document.getElementById("letstring").innerHTML="Let datatype string value: "+F;
 document.getElementById("letstring").style.color="green";


