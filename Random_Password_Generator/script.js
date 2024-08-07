const displaypassword = document.querySelector("#password");
const lengthInput = document.querySelector("#length");
const numbers = "0123456789";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const specialsymbols = "~!@#$%^&*()_+~|{}<>?=[]";

function RandomPassword() {
    const length = parseInt(lengthInput.value);
    if(isNaN(length) || length < 4){
        alert("Please enter a length of at least 4")
        return;
    }
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialsymbols[Math.floor(Math.random() * specialsymbols.length)];
    const all = uppercase + lowercase + numbers + specialsymbols;
    while (length > password.length) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    displaypassword.value = password;
}

function copy() {
    displaypassword.select();
    document.execCommand("copy");
    setTimeout(function() {
        lengthInput.value = ""; 
        displaypassword.value = "";
      }, 4000);
}