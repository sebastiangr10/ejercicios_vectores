'use strict'
var lista=document.getElementById("lista");
var listaDesplegable=document.getElementById("lista-desplegable");

var fragmentolis=document.createDocumentFragment();
var fragmentolisD=document.createDocumentFragment();

 var vector1 =[5]
 var vector2 = [5]
 var vector3 = [10]; 
 
for (let index = 0; index<10; index++) {
    if(index<5){
        vector1[index] = Number(prompt('ingrese Número'))
    }
    else if(index>4){
        vector2[index] = Number(prompt('ingrese Número'))
    }
}
for (let index = 0; index<10; index++) {
    if(index<5){
       vector3[index] = vector1[index] 
    }
    else if(index>4){
        vector3[index] = vector2[index] 
    }

}
vector3.forEach((dato,index)=>{
    vector3.sort((a,b)=>a-b)
    const li=document.createElement("li");
    li.textContent=dato;
    fragmentolis.appendChild(li)
    var opcion=document.createElement("option")
    opcion.textContent=dato;
    opcion.setAttribute("value",index)
    fragmentolisD.appendChild(opcion);
    })
    lista.appendChild(fragmentolis)
    listaDesplegable.appendChild(fragmentolisD)
    setTimeout(() => {
      document.getElementById("lista").remove()  
    }, 1000);