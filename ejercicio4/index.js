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
let focusInputValue =  function(event) {
  console.log('Valor del input (focus): ' + event.target.value);
};
document.querySelector('.focus').addEventListener('focus', focusInputValue);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
//NOTA: Como no sé a qué elemento input se refiere el enunciado lo hago para los tres que existen.

const clickInput = document.querySelector('.click');
const focusInput = document.querySelector('.focus');
const valueInput = document.querySelector('.value');

clickInput.addEventListener('input', (event) => {
    console.log('Valor del input "click":' + event.target.value);
});
focusInput.addEventListener('input', (event) => {
    console.log('Valor del input "focus":' + event.target.value);
});
valueInput.addEventListener('input', (event) => {
    console.log('Valor del input "value":' + event.target.value);
});

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lighning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement('ul');

albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album; 
  ul.appendChild(li);
});

document.body.appendChild(ul);
