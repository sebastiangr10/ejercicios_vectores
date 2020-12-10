var array1 = ["1","3","5","7","9"];
var array2 = ["2","4","6","8","10"];
var array3 =[]

array3= array1.concat(array2);
console.log(array3);

for (let index = 0; index <array3.length ; index++) {
    document.write(array3[index] + "<br>")
}