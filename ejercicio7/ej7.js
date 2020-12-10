"use strict"
var num = new Array(20);
for (let index =1; index <=20; index++) {
    num[index] = Math.round( Math.random() * (100),1); 
}
for(let i=1; i<=20;i++){
    document.write("los número es  " + num[i] + "<br>")
}
var buscar=prompt("ingrese un número a buscar")
for(let i=1; i<=20;i++){
    if(num[i]==buscar){
    document.write("el número " + buscar+ " esta en la posicion  " + i)
    i=20
}
else if(i==20){
    document.write(" el número " + buscar +" no se encontró ")}
}
