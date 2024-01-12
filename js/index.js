// console.log('hello')
// console.log('hii')


// document.getElementById("myH2").textContent="my name is latha"

/*let username;
let result;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("mytext").value;

console.log(username);
}
*/

// let x="0";
// x=Boolean(x);
// console.log(x);

// ******************************************************
/* let pi=3.14159;
  let radius = prompt("enter the radius of a circle");
  radius = Number(radius);
  circumference =2*pi*radius;
  console.log(circumference); //display the value in console
  document.getElementById("result").textContent=circumference;*/

  
  const PI=3.14159;
  let radius;
  let circumference ;
  document.getElementById("mySubmit").onclick = function(){
    radius=document.getElementById("myValue").value;
    radius=Number(radius)
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("result").textContent=circumference
  }

