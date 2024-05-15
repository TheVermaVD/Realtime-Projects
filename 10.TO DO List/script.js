
let input = document.querySelector("input[type=text]");
let btn = document.querySelector("input[type=button]");

let todoItems = document.querySelector(".todoItems");


btn.addEventListener('click', addTasks);

window.addEventListener('keydown', (e)=>{
    // console.log(e.key);

    if(e.key =="Enter"){
       addTasks();

    }
});


function addTasks(){

    if (!input.value) {

        document.querySelector("p.message").innerHTML = "Please Enter Some To Do List...!";

        return; //implies same as "return false;"
    }

    let task = ` <div class="item"> 

                <li>${input.value}</li> 
                <button>Edit</button>
                <button>Remove</button> 

                </div> `;
    //console.log(task, typeof task); //returns the string datatype

    document.querySelector(".todoItems").insertAdjacentHTML('beforeend', task);

    //Also,

    // document.querySelector(".todoItems").innerHTML += task;

    // document.querySelector(".todoItems").appendChild(task); //takes only node


    //OR, Using DOM manipulation ways-

    // let parnt = document.querySelector(".todoItems");
    // let newNode = document.createElement("div");
    // parnt.appendChild(newNode);

    // //now inserting the data inside <li> -
    // newNode.innerHTML= input.value;

    input.value = "";

    savetoLocalStorage();

};


input.addEventListener('focus', (e) => {

    document.querySelector("p.message").innerHTML = "";

});


//Now Through Selecting Parent, traversing to child element i.e edit and delete button -

todoItems.addEventListener('click', function (e) {

    // console.log(e.target); //only triggers the element on which we click i.e where the event occuring.(In other word, If there are multiple child elements under parent & we registered event to parent element, then using e.target we get each element where ever we click on the element, either it could be any child element or entire parent element, where as e.currenttargte only returns the entire parent element on anywhere click on its elements.)
    // console.log(e.currentTarget); //only triggers the selected whole element, we can't get its child element on click i.e on event occuring.

    if (e.target.innerHTML == "Remove") {

        //console.log(e.target); //only we get <remove> element as we added condition in if() block, we filtered out e.target here.

        // console.log(e.target.parentElement); //getting only the parent element.

        //selecting item class <div> element through Remove element
        let itemParent = e.target.parentElement;

        this.removeChild(itemParent);  //remove actually from dom of HTML.
        // OR,
        // itemParent.style.display="none"; //removes but doesnt remove from actual DOM.
        // itemParent.style.visibility="hidden"; //occupie the place

        // itemParent.remove();  (Best Way)

        // if(e.target.tagName ==="SPAN") {  //if there could have added one SPAN tag

        //     e.target.parentElement.remove();
        // } 

        savetoLocalStorage();
    }

    if (e.target.innerHTML == "Edit") {

        //selecting <li> element through Edit element-
        let liElmnt = e.target.previousElementSibling;

        //assigning <li> element content to input field -
        input.value = liElmnt.innerHTML;
        input.focus();

        e.target.parentElement.remove();

        // btn.value="Update";

        savetoLocalStorage();

    }

});

function savetoLocalStorage() {


    let strHTML = document.querySelector(".todoItems").innerHTML; //now it will return an string which will accept by setItem() 2nd argument.

   localStorage.setItem("data", strHTML); //here we storing HTML/XML format data i.e a string datatype and also retriving same string data from there.

}

function loadfromLocalStorage() {

    let loadStr = localStorage.getItem("data");

    document.querySelector(".todoItems").innerHTML = loadStr;

};

loadfromLocalStorage(); //calling on window load data get fetched on screen.


// Note : JSON.stringify(< JS_Object >) : Converts JS Object into JSON strings.

//    JSON.parse(< JSON_String i.e File >) : Converts JSON strings into JS Object. 



