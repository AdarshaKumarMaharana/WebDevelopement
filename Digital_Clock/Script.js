let section = document.querySelector("section");
const icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector(".hour-num").innerHTML = hour;
    document.querySelector(".min-num").innerHTML = minute;
    document.querySelector(".sec-num").innerHTML = second;

    let d;
    d = hour < 12 ? "AM" : "PM"; // if hr > 12 then "AM"
    hour = hour > 12 ? hour - 12 : hour;   // if hr > 12 then do hr - 12 to get the value till 12 
    hour = hour == 0 ? hour = 12 : hour;   // if hr = 0 then hr = 12

    document.querySelector(".am-pm").innerHTML = d;

}, 1000)