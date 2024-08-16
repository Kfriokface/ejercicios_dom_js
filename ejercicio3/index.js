// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ul = document.createElement("ul");
document.body.appendChild(ul);
for (i = 0; i < countries.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = countries[i];
  ul.appendChild(li);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let itemsToRemove = document.querySelectorAll(".fn-remove-me");
itemsToRemove.forEach(item => {
  item.remove();
});

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let target = document.querySelector('[data-function="printHere"]');
let newUl = document.createElement("ul");
target.appendChild(newUl);
for (i = 0; i < cars.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = cars[i];
  newUl.appendChild(li);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (i = 0; i < countries2.length; i++) {
  let div = document.createElement("div");
  document.body.appendChild(div).classList.add('item');
  let h4 = document.createElement("h4");
  div.appendChild(h4);
  h4.innerHTML = countries2[i].title;
  div.insertAdjacentHTML('beforeend', '<img src="' + countries2[i].imgUrl + '" alt="' + countries2[i].title + '">');
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
document.body.insertAdjacentHTML('afterend', '<button id="btn">Elimina el último</button>');
let removeLastItem = function(event) {
  console.log(event);
  const items = document.querySelectorAll('.item');
  for (i = 0; i < items.length; i++) {
    if ( i === items.length - 1 ) {
      items[i].remove();
    }
  }
}
document.getElementById("btn").addEventListener("click", removeLastItem);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const items2 = document.querySelectorAll('.item');
let removeSelf = function(event) {
  console.log(event);
  this.parentNode.remove();
}
for (i = 0; i < items2.length; i++) {
  items2[i].insertAdjacentHTML('beforeend', '<button class="btn">Elimíname</button>');
  items2[i].lastChild.addEventListener("click", removeSelf);
}

