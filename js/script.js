"use strict";
// Working with table

/* var body = document.body;
var table = body.children[1].childNodes[1];
var tr = table.rows;
var td = tr.cells; */

// Diagonal
/* for (var i = 0; i < tr.length; i++) {
  tr[i].cells[i].style.backgroundColor = 'red';
  tr[i].cells[tr.length - 1 - i].style.backgroundColor = 'blue';
  
}  */

// Working with sums of td

let tr = document.getElementsByTagName('tr');
let td = document.getElementsByTagName('td');

let sum = 0;
let mainV = 0;
let inderectVal = 0; 

for (var i = 0; i < td.length; i++) {
  td[i].innerHTML = randNum(1, 30);  
  td[i].onclick = tbOnClick;
}



 for (var i = 0; i < tr.length; i++) {
  mainV += +tr[i].cells[i].innerHTML;
  tr[i].cells[i].className = 'main';
  tr[i].cells[i].onclick = null;

    inderectVal += +tr[i].cells[tr.length - 1 - i].innerHTML;
    tr[i].cells[tr.length - 1 - i].onclick = null;
    tr[i].cells[tr.length -1 -i].className = "inderect"; 
  
} 

main.innerHTML = `Sum main: ${mainV}`;
rez.innerHTML = `Sum inderect: ${inderectVal}`;

function randNum(min, max) {
  return Math.floor(min + Math.random() * (max - min) + 1);
}

function tbOnClick() {
  if (this.hasAttribute('class')) {
    this.removeAttribute('class');
    sum -= +this.innerHTML;
    act.innerHTML = `Sum of active: ${sum}`;
  } else {
    this.setAttribute('class', 'active');
    sum += +this.innerHTML;
    act.innerHTML = `Sum of active: ${sum}`;
  }
}



