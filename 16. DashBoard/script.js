
let items = document.getElementById("items");



window.addEventListener("contextmenu", (e) => {

    e.preventDefault(); //To prevent browser's default context menu.

    let xCor = e.offsetX;
    let yCor = e.offsetY; //returns mouse pointer x and y co-ordinates.


    items.style.left = `${xCor}px`;
    items.style.top = `${yCor}px`;

    items.style.visibility = "visible";


});

window.addEventListener("click", () => {

    items.style.visibility = "hidden";


});


// Add App -

// let data = fetch("./data.json");

// data.then((resp)=> resp.json()).then((data)=>{

//     console.log(data);


// }
// );

async function resp() {

    let response = await fetch("./data.json");

    let data = await response.json();


    return data;
}

let currntIndex = 0;

let addbutton = document.getElementById("add-apps");

addbutton.addEventListener("click", () => {


    resp().then((data) => {

        if (data.length > currntIndex) {

            let item = data[currntIndex];

            // console.log(item);

            document.getElementById("dataList").innerHTML += 
            
            `<li> <img src="${item.app}" width="63px" alt=""> </li> `;


            currntIndex++;

        } else {

         alert("No More App Found!") ;
            // console.log("No more data to add!");
        }


    }).catch((err) => console.log("Could not fetch Data"));


});


// Clock -JS 


function clock(){

    var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + ", " + " " +
    today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());


    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;               

    document.getElementById('hours').innerHTML = h;
    document.getElementById('point').innerHTML = ":";
    document.getElementById('min').innerHTML = m;
    // document.getElementById('sec').innerHTML = s;

}

var inter = setInterval(clock, 400);












