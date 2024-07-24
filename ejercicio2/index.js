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
