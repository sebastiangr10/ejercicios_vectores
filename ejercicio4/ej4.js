"use strict"

var vector1 = new Array(5);
var vector2 = new Array(5);
for (let index = 1; index <=5; index++) {
  vector1[index] = prompt("ingrese un número")}
 
  for (let index = 1; index <=5; index++) {
    vector2[index] = vector1[index]*2
}
for(let i=1;i<=5;i++){
    document.write("el número  "+ vector1[i] +" multiplicado por dos es "  + vector2[i] + "<br>")
}

   