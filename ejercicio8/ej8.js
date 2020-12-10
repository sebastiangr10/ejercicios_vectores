"use strict"

var genero= new Array(10);
var registro= new Array(10);
var nombre= new Array(10);
var edad = new Array(10);
var contMenor=0
 var contMas=0
 var contFem=0
 var contReg=0
for(let i=1; i<=10;i++){
    prompt("ingrese usuario #" + i)
    nombre[i]=prompt("ingrese el nombre del conductor")
     edad[i]=prompt("ingrese la edad del conductor")
    genero[i]=prompt("ingrese genero del conductor 1 Femenino  2 Masculino")
    registro[i]=prompt("ingrese el registro del conductor  1 Medellín   2 otras ciudades")
}
for(let i=1;i<=10;i++){
    if(edad[i]<25){
        contMenor=contMenor+1
    }
    else if(genero[i]==1){
        contFem=contFem+1
    }
    else if(genero[i]==2 && edad[i]>=12 && edad[i]<=30){
        contMas=contMas+1
    }
    else if(registro[i]==2){
        contReg=contReg+1
    }
}
for(let i=1;i<=10;i++){
    if(genero[i]==1 && edad<30){
        document.write("género femenino menor de 30 años"+"<br>")
        document.write("el nombre del conductor es " + nombre[i]+"<br>")
}
}
document.write("-----------------------------------------")

for(let i=1;i<=10;i++){
    if(registro[i]==1){
        document.write("registro de Medellín"+ "<br>")
        document.write("el nombre del conductor es " + nombre[i]+ " con " + edad[i]+ " años "+ "<br>")
    }
}
var porconductor=(contMenor/10)*100
var porfemenino=(contFem/10)*100
var pormasculino=(contMas/10)*100
var porcregistro=(contReg/10)*100

document.write("-----------------------------------------")
document.write("porcentaje de conductores menores de 25 años " + porconductor+ " %"+ "<br>")
document.write("porcentaje de conductores del sexo femenino " + porfemenino+ " %"+ "<b>")
document.write("porcentaje de conductores masculinos con edades entre 12 y 30 años " + pormasculino+ " %"+"<br>")
document.write("porcentaje de conductores cuyos carros estan registrados fuera de Medellín " + porcregistro+ " %"+ "<br>")