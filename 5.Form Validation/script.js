
let userName = document.querySelector("input[type=text]");
let userPass = document.querySelector("input[type=password]");
let userMessage = document.querySelector(".userMessage");
let passMessage = document.querySelector(".passMessage");
console.log(userPass.value);

function validation() {

    if (userMessage.value == "") {

       userMessage.innerHTML = "User Name Is Empty";
       return false;

    } else if (userName.value.length <= 3) {
        userMessage.innerHTML = "User Name Required Min 3 Chars";
        return false;

    } else {
        userMessage.innerHTML = "";
        
    }

    if(userPass.value == ""){
        passMessage.innerHTML = "Password Is Empty";

        return false;
    }else{
        passMessage.innerHTML = "";

    }

      return true; //Bydeafult if we skip this return with true then bedefault it returns 'true' to the function.





}