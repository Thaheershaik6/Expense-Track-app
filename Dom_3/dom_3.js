//Examine the document Object
console.dir(document);
console.log(document);
console.log(document.URL);
console.log(document.title);
document.title = 'Thaheer';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//Get Element by id
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h1>Hello1</h1>'
// document.all[10].textContent = 'hello';
header.style.borderBottom = 'solid 4px #000';
var textcolor = document.getElementById('green-color');
textcolor.style.color = 'green';