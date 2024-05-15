
let input=document.querySelector("input[type=text]");
let btn=document.querySelector("input[type=button]");


let myArr = [];

let prevData=localStorage.getItem("myData");

let fetchedArrayData = JSON.parse(prevData);

if(fetchedArrayData!= null){

//  Now Assigning this value into myArr array 
    myArr = fetchedArrayData;

}

//console.log(typeof fetchedArrayData); // returnn Array Prototype.
displayInfo()


btn.addEventListener('click', function(e){

    // inputValue = input.value ;
    // console.log(inputValue);

    let value =  input.value;

     myArr.push({"taskName":value});

    // console.log(myArr);

    let str = JSON.stringify(myArr);
    localStorage.setItem("myData", str );

    input.value=""; 

    displayInfo();

});


function displayInfo(){

    myArr.forEach((element, index)=>{

        let taskcode = ` <div class="item"> 

        <li>${element.taskName}</li> 
        <button>Edit</button>
        <button>Remove</button> 

        </div> `;

        document.querySelector(".todoItems").insertAdjacentHTML('beforeend', taskcode);


    })
   

    

    // myArr.forEach((element, index)=>{

    //     console.log(element);

    // });
}











// console.log(jsonData);

// let jsonData = localStorage.getItem("myData");
// console.log(JSON.parse(jsonData));