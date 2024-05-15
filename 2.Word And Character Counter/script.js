
let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){

//for the each character counts -
let characters = this.value.length;

document.getElementById("char").innerHTML =  characters ;

//For each word counter [with help of filter() method to remove extra spaces from array which is formed by text by applying split() method --]
let messyArry = this.value.split(" ");

let newArry = messyArry.filter(x=> x!= "")

// console.log(newArry);

document.getElementById("word").innerHTML = newArry.length;

});

// let text = "   How are you       there  doing"

// console.log(text.split(' '));