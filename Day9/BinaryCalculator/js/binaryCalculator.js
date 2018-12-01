var operator = "";

function operand(e) {
    var btn = e.target = e.srcElement;
    var value = document.getElementById(btn.id).innerText;
    document.getElementById("res").innerHTML += value;
}

document.getElementById("btn0").onclick = operand;
document.getElementById("btn1").onclick = operand;

function opr(e) {
    var btn = e.target = e.srcElement;
    operator = document.getElementById(btn.id).innerText;
    document.getElementById("res").innerHTML += operator;
}

document.getElementById("btnSum").onclick = opr;
document.getElementById("btnSub").onclick = opr;
document.getElementById("btnMul").onclick = opr;
document.getElementById("btnDiv").onclick = opr;

function clear(e) {
    var btn = e.target = e.srcElement;
    document.getElementById("res").innerHTML = "";
}

document.getElementById("btnClr").onclick = clear;

function equal(e) {
    var btn = e.target = e.srcElement;
    var exp = document.getElementById("res").innerHTML;
    var arr = exp.split(operator);
    exp = parseInt(arr[0], 2) + operator + parseInt(arr[1], 2);
    var result = eval(exp);
    document.getElementById("res").innerHTML = result.toString(2);
}

document.getElementById("btnEql").onclick = equal;