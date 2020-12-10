"use strict"
var promedio
var contador=0

var vector1= new Array(10);
for (let index = 1; index <=10; index++) {
    vector1[index] = prompt("ingrese un número")
contador= contador+Number(vector1[index])
}
promedio=contador/10
document.write("el promedio del array es " + promedio)