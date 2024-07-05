var currentdisplay = '';
function op(btn) {
    if (btn === 'AC') {
        currentdisplay = '';
        document.querySelector('#display').value = currentdisplay;
    }
    else if (btn === 'del') {
        currentdisplay = currentdisplay.slice(0, -1);
        document.querySelector('#display').value = currentdisplay;
    }
    else {
        currentdisplay = currentdisplay + btn;
        document.querySelector('#display').value = currentdisplay;
    }
}

function equal() {
    let a = document.querySelector('#display').value
    let b = eval(a);
    currentdisplay = b;
    document.querySelector('#display').value = b;
    currentdisplay = "";
}