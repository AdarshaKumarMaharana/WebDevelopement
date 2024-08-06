
let qrDiv = document.querySelector("#qr-div");
let qrCode = document.querySelector("#qr-code");
let qrText = document.querySelector("input");

function generateQR() {
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}
generateQR();