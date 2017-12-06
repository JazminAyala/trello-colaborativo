/* add.EventListener nos permite indicar al agente de usuario que permanezca atento a la interacción
de un usuario sobre un elemento en concreto, sin necesidad de tocar un sólo caracter de nuestro marcado. */

var container = document.createElement('div');
var parentSection = document.getElementById('container');

window.addEventListener('load', firstBox )  /* para la carga */
    var boxAddList = document.getElementById('add-list');
  /* se llama a la clase desde HTML */

function firstBox(){
  boxAddList.addEventListener("click", createBox);
}
function createBox(){
  var input = document.createElement('input');
  var btnSave = document.createElement('button');
  var btnClose = document.createElement('i');

  container.appendChild(input);
  container.appendChild(btnSave);
  container.appendChild(btnClose);
  parentSection.appendChild(container);

  container.setAttribute('class', 'box-form');
  input.setAttribute('placeholder', 'Añadir una lista...');
  input.setAttribute('class', 'input-style');
  btnSave.setAttribute('class', 'btn-style');
  btnSave.setAttribute('id','save-js');
  btnClose.setAttribute('class','fa fa-times btn-close-style');
  btnSave.textContent = 'Guardar';

  btnSave.addEventListener("click", buttonSave);
}

function buttonSave(){
  createBox();

