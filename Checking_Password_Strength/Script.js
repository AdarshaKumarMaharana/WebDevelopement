var password = document.querySelector("#password");
var msg = document.querySelector("#msg");
var strength = document.querySelector("#strength");

password.addEventListener("input",() => {
    if(password.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }

    if(password.value.length < 4){
        strength.innerHTML = "too small & weak 😒";
        password.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
        msg.style.fontSize = "1.5rem";
    }
    else if(password.value.length >= 4 && password.value.length < 8){
        strength.innerHTML = "medium 🙄";
        password.style.borderColor = "yellow";
        msg.style.color = "yellow";
        msg.stylefontSize = "1.5rem";
    }
    else if(password.value.length >= 8){
        strength.innerHTML = "strong 🫡";
        password.style.borderColor = "green";
        msg.style.color = "green";
        msg.style.fontSize = "1.5rem";
    }
    else if(password.value.length > 10){
        strength.innerHTML = " in Z+ security 😍";
        password.style.borderColor = "green";
        msg.style.color = "green";
        msg.style.fontSize = "1.5rem";
    }
})