let ListaTareas = {
  tareas: [],

  agregarTarea: function(tarea) {
    this.tareas.push(tarea);
  },

  mostrarLista: function() {
    let lista = document.getElementById("lista-tareas");

    // Limpiar la lista antes de mostrar las tareas
    lista.innerHTML = "";

    for (let i = 0; i < this.tareas.length; i++) {
      let tareaItem = document.createElement("li");
      tareaItem.textContent = this.tareas[i];
      lista.appendChild(tareaItem);
    }
  }
};

let formulario = document.getElementById("formulario");
let inputTarea = document.getElementById("input-tarea");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario y se recargue la página

  let tarea = inputTarea.value.trim();

  if (tarea !== "") {
    ListaTareas.agregarTarea(tarea);
    ListaTareas.mostrarLista();
    inputTarea.value = ""; // Limpiar el campo de texto
  }
});
