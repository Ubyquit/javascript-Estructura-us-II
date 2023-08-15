class Nodo {
    constructor(objeto, cantidad, imagen, espacio) {
        this.objeto = objeto;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.espacio = espacio;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolDeInventario {
    constructor() {
        this.raiz = null;
        this.tamanio = 0;
    }

    agregarNodo(objeto, cantidad, imagen) {
        if (this.tamanio >= 21) {
            alert("El inventario está lleno, no puedes agregar más ítems.");
            return;
        }

        let nuevoNodo = new Nodo(objeto, cantidad, imagen, this.tamanio + 1);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._agregarNodo(this.raiz, nuevoNodo);
        }
        this.tamanio++;
    }

    _agregarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.objeto < nodo.objeto) {
            if (nodo.izquierdo === null) {
                nodo.izquierdo = nuevoNodo;
            } else {
                this._agregarNodo(nodo.izquierdo, nuevoNodo);
            }
        } else {
            if (nodo.derecho === null) {
                nodo.derecho = nuevoNodo;
            } else {
                this._agregarNodo(nodo.derecho, nuevoNodo);
            }
        }
    }

    encontrarNodo(nodo, objeto) {
        if (nodo === null) {
            return null;
        } else if (objeto < nodo.objeto) {
            return this.encontrarNodo(nodo.izquierdo, objeto);
        } else if (objeto > nodo.objeto) {
            return this.encontrarNodo(nodo.derecho, objeto);
        } else {
            return nodo;
        }
    }

    eliminarNodo(objeto) {
        this.raiz = this._eliminarNodo(this.raiz, objeto);
        if (this.raiz !== null) {
            this.tamanio--;
        }
    }

    _eliminarNodo(nodo, key) {
        if (nodo === null) {
            return null;
        } else if (key < nodo.objeto) {
            nodo.izquierdo = this._eliminarNodo(nodo.izquierdo, key);
            return nodo;
        } else if (key > nodo.objeto) {
            nodo.derecho = this._eliminarNodo(nodo.derecho, key);
            return nodo;
        } else {
            if (nodo.izquierdo === null && nodo.derecho === null) {
                nodo = null;
                return nodo;
            } else if (nodo.izquierdo === null) {
                nodo = nodo.derecho;
                return nodo;
            } else if (nodo.derecho === null) {
                nodo = nodo.izquierdo;
                return nodo;
            }
        }
    }

    llenarSelect(nodo, select) {
        if (nodo !== null) {
            let opcion = document.createElement('option');
            opcion.value = nodo.objeto;
            opcion.textContent = `${nodo.objeto} (Espacio ${nodo.espacio})`;

            select.appendChild(opcion);
    
            this.llenarSelect(nodo.izquierdo, select);
            this.llenarSelect(nodo.derecho, select);
        }
    }
}

let arbol = new ArbolDeInventario();

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let objeto = document.getElementById('objeto').value;
    let cantidad = document.getElementById('cantidad').value;
    let imagen = document.getElementById('imagen').value;
  
    arbol.agregarNodo(objeto, cantidad, imagen);
  
    let inventario = document.getElementById('inventario');
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let imagenElement = document.createElement('img');
    imagenElement.src = imagen;
    imagenElement.classList.add('imagen');
    itemDiv.appendChild(imagenElement);

    let objetoDiv = document.createElement('div');
    objetoDiv.textContent = objeto;
    objetoDiv.classList.add('objeto');
    itemDiv.appendChild(objetoDiv);
  
    let cantidadDiv = document.createElement('div');
    cantidadDiv.textContent = `Cantidad: ${cantidad}`;
    cantidadDiv.classList.add('cantidad');
    itemDiv.appendChild(cantidadDiv);
  
    inventario.appendChild(itemDiv);
  
    let select = document.getElementById('objeto-eliminar');
    select.innerHTML = '';
    arbol.llenarSelect(arbol.raiz, select);
});


document.getElementById('formulario-eliminar').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let objeto = document.getElementById('objeto-eliminar').value;
    arbol.eliminarNodo(objeto);
  
    let inventario = document.getElementById('inventario');
    for (let i = 0; i < inventario.children.length; i++) {
        let itemDiv = inventario.children[i];
        if (itemDiv.children[1].textContent === objeto) {
            inventario.removeChild(itemDiv);
            break;
        }
    }
  
    let select = document.getElementById('objeto-eliminar');
    select.innerHTML = '';
    arbol.llenarSelect(arbol.raiz, select);
});
