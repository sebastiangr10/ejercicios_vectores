"use strict"

var nombre = new Array(10);
var edad = new Array(10);
for (let index = 1; index <=10; index++) {
  nombre[index] = prompt("ingrese nombre del usuario")  
  edad[index] = prompt("ingrese edad del usuario ") ; 
}
for(let i=1; i<=10;i++){
    document.write( nombre[i] + " tiene "+ edad[i] + " años " +"<br>" ) 
}