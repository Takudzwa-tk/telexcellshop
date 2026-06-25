function calculateRepair(){

let part =
Number(document.getElementById("partCost").value);

let labour =
Number(document.getElementById("labourCost").value);

let total = part + labour;

document.getElementById("result").innerHTML =
"Estimated Cost: R" + total;

}

function sendWhatsApp(){

let name =
document.getElementById("name").value;

let device =
document.getElementById("device").value;

let issue =
document.getElementById("issue").value;

let message =
"Repair Booking%0A%0A" +
"Name: " + name + "%0A" +
"Device: " + device + "%0A" +
"Issue: " + issue;

window.open(
"https://wa.me/27717512104?text=" + message,
"_blank"
);

}

function searchProducts(){

let input =
document.getElementById("searchInput");

let filter =
input.value.toUpperCase();

let products =
document.querySelectorAll(".product");

products.forEach(product => {

let title =
product.querySelector("h3");

let text =
title.textContent ||
title.innerText;

if(text.toUpperCase().indexOf(filter) > -1){

product.style.display = "";

}
else{

product.style.display = "none";

}

});

}

function filterCategory(category){

let products =
document.querySelectorAll(".product");

products.forEach(product => {

if(category === "all"){

product.style.display = "block";

}

else if(product.classList.contains(category)){

product.style.display = "block";

}

else{

product.style.display = "none";

}

});

}