let mode="netToCard";

function setMode(selected){

mode=selected;

document.querySelectorAll(".modes button")
.forEach(btn=>btn.classList.remove("active"));

if(mode==="netToCard"){
document.getElementById("btn1").classList.add("active");
}

if(mode==="cardToNet"){
document.getElementById("btn2").classList.add("active");
}

if(mode==="cashFee"){
document.getElementById("btn3").classList.add("active");
}

calculate();
}


function calculate(){

let amount=parseFloat(
document.getElementById("amount").value
);

let rate=parseFloat(
document.getElementById("rate").value
)/100;

let label1="";
let value1=0;

let label2="";
let value2=0;


if(mode==="netToCard"){

let total=amount/(1-rate);
let fee=total-amount;

label1="Karttan Çekilecek";
value1=total;

label2="Komisyon";
value2=fee;
}


if(mode==="cardToNet"){

let net=amount*(1-rate);
let fee=amount-net;

label1="Müşteriye Verilecek";
value1=net;

label2="Komisyon";
value2=fee;
}


if(mode==="cashFee"){

let fee=amount*rate;

label1="Nakit Komisyon";
value1=fee;

label2="Karttan Çekilecek";
value2=amount;
}


document.getElementById("label1").innerText=label1;
document.getElementById("value1").innerText=
value1.toFixed(2)+" ₺";

document.getElementById("label2").innerText=label2;
document.getElementById("value2").innerText=
value2.toFixed(2)+" ₺";

}

calculate();