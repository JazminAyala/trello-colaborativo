/* add.EventListener nos permite indicar al agente de usuario que permanezca atento a la interacción
de un usuario sobre un elemento en concreto, sin necesidad de tocar un sólo caracter de nuestro marcado. */
window.addEventListener('load', function () {   /* para la carga */
    var boxAddList = document.getElementsByClassName('add-list')[0];  /* se llama a la clase desde HTML */

    boxAddList.addEventListener('click', function () {  /* para cuando el usuario haga clik */

        /*creando etiquetas ya declaradas en CSS */
        var container = document.createElement('div');
        //var form = document.createElement('input');
        //var btnSave = document.createElement('button');
        var btnClose = document.createElement('i');
        var parentSection = document.getElementById('container')   /* se llama al id del HTML llamado "container" */

        /* Agregando elementos SECTION-TRES del html */
        /* appendChild, agregará  un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado */
        container.appendChild(form);
        container.appendChild(btnSave);
        container.appendChild(btnClose);
        parentSection.appendChild(container);

        /* Agregando Atributos SECTION-TRES del html */
        /* setAttribute, agregará un nuevo atributo */
        container.setAttribute('class', 'box-form');
        form.setAttribute('placeholder', 'Añadir una lista...');
        form.setAttribute('class', 'input-style');
        btnSave.setAttribute('class', 'btn-style');
        btnSave.setAttribute('id','save-js');
        btnClose.setAttribute('class','fa fa-times btn-close-style');

        /*agregando texto al botón color verde de la caja desplegable */
        btnSave.textContent = 'Guardar';   /* btnSave elemento agregado */


        /*Borrar al div inicial */
        /* removeChild elimina un nodo hijo del DOM y puede devolver el nodo eliminado.*/
        //         parentSection.removeChild(boxAddList);

        /* Creando Evento del botón guardar color verde de la ventana desplegable */

  })

})


document.getElementById("save-js").addEventListener('click', buttonCreate);

function buttonCreate(){
    var textList= document.getElementsByClassName("input-style").value;

    /** Creando la nueva caja desplegable */
    //var containerList = document.createElement('div');
  //  var titleList = document.createElement('p');
  //  var boxInput = document.createElement('p');

    /*Agregando el texto de la caja desplegable "añadir lista" */
    //titleList.textContent=textList;
    titleList.innerHTML.appendChild(document.createTextNode(textList));

    titleList.setAttribute('class','title-style'); /* agregando atributo class*/
    //var boxInput ='Añadir una tarea';
}
