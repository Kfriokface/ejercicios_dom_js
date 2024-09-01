// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
newButton.setAttribute('id', 'btnToClick');
document.body.appendChild(newButton);
let showEventInfo = function(event) {
    console.log(event);
};
document.getElementById("btnToClick").addEventListener("click", showEventInfo);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let focusInputValue =  function() {
  console.log('Valor del input (focus): ' + this.value);
};
document.querySelector('.focus').addEventListener('focus', focusInputValue);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let inputInputValue =  function() {
  console.log('Valor del input (input): ' + this.value);
};
const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs; i++) {
  inputs[i].addEventListener('input', inputInputValue);
}
// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lighning",
  "Painkiller",
  "Iron Fist",
];