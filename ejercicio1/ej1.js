var NumeroEntero = new Array(100);
for (let index = 0; index < 100; index++) {
    NumeroEntero[index] = Math.round( Math.random() * (100),1);  
    
}
for(i=0; i<100;i++){
    document.write( NumeroEntero[i]+" "+"<br>" ) 
}

