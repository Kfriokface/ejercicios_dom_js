// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement("div");
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div2 = document.createElement("div");
document.body.appendChild(div2);
let p = document.createElement("p");
div2.appendChild(p);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let div3 = document.createElement("div");
document.body.appendChild(div3);
for (i = 1; i <= 6; i++) {
  let p = document.createElement("p");
  div3.appendChild(p);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pDinamico = document.createElement("p");
let textoDinamico = document.createTextNode("Soy dinámico!");
pDinamico.appendChild(textoDinamico);
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let wubba = document.querySelector("h2.fn-insert-here");
wubba.innerHTML= "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul");
document.body.appendChild(ul);
for (i = 0; i < apps.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = apps[i];
  ul.appendChild(li);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let itemsToRemove = document.querySelectorAll(".fn-remove-me");
itemsToRemove.forEach(item => {
  item.remove();
});
