let buttons = document.querySelectorAll("button");
let inputBox = document.querySelector("#display");

let total = "";


// let text = "ABCDEF";
// console.log(Array.from(text)); //Converts any iterable object into an array.Ex-
// console.log(buttons);
// console.log(Array.from(buttons));


Array.from(buttons).forEach(function (element) { //Note : Here, we can directly apply forEach() method on NodalList as NodalList provides the forEach() method in its NodalList Prototype, so we wound not need to convert NodalList data into Array data.

    element.addEventListener('click', function () {

        // console.log(this.innerHTML); //works only with Not arrow function.
        // console.log(element.innerHTML); //we can do by these as well.
        // console.log(e.target.innerHTML);

        if (this.innerHTML == "=") {
            
            total = eval(total);
            inputBox.value = total;

        } else if (this.innerHTML == "AC") {
            
            total = "";
            inputBox.value = total;

        }else if (this.innerHTML == "DEL") {
            
            // total = total.slice(0, (total.length-1));
            // total = total.substring(0, (total.length-1));
            // total = total.slice(0, -1);
            total = total.toString().slice(0, -1);

            inputBox.value = total;

        }else if(this.innerHTML == "%"){

            total = total /100;
            inputBox.value = eval(total)


        }

         else if (this.innerHTML == "÷") {

            total = total + "/";
            inputBox.value = total;
        }
        
         else if (this.innerHTML == "×") {

            //Note : Javascript i.e .js cann't read HTML entity number or Hex code (only .html code can read it), so while comparing value it will return false, as js cant able to recognized HMTL entity name i.e &times here.

            total = total + "*";
            inputBox.value = total;
        }

        else {

            total = total + this.innerHTML;

            inputBox.value = total;

        }



    });

});


// console.log(document.querySelector("button[value='/']").innerHTML);

// console.log("5" == "&#247");


// let x= eval(3); 
// console.log(typeof x, x);


// console.log(eval(2+2)===eval("2+2"));

// function calculate(...array){


//   return array.reduce((total, current_value )=> total+current_value, 0);
    
// }
// console.log(calculate(3,4));

// let num = "1234" 
// // want "123"

// console.log(num.slice(0,3)); //123

// console.log(eval("8%"));


