class Nodo {
    constructor(objeto, cantidad, imagen) {
        this.objeto = objeto;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolDeInventario {
    constructor() {
        this.raiz = null;
    }

    agregarNodo(objeto, cantidad, imagen) {
        let nuevoNodo = new Nodo(objeto, cantidad, imagen);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._agregarNodo(this.raiz, nuevoNodo);
        }
    }

    _agregarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.cantidad < nodo.cantidad) {
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

    eliminarNodo(objeto) {
        this.raiz = this._eliminarNodo(this.raiz, objeto);
    }

    _eliminarNodo(nodo, objeto) {
        if (nodo === null) {
            return null;
        }

        if (objeto === nodo.objeto) {
            if (nodo.izquierdo === null && nodo.derecho === null) {
                nodo = null;
                return nodo;
            }

            if (nodo.izquierdo === null) {
                nodo = nodo.derecho;
                return nodo;
            } 
            
            if (nodo.derecho === null) {
                nodo = nodo.izquierdo;
                return nodo;
            }

            let temp = this.encontrarMinNodo(nodo.derecho);
            nodo.objeto = temp.objeto;
            nodo.cantidad = temp.cantidad;
            nodo.imagen = temp.imagen;
            nodo.derecho = this._eliminarNodo(nodo.derecho, temp.objeto);
            return nodo;
        } else if (objeto < nodo.objeto) {
            nodo.izquierdo = this._eliminarNodo(nodo.izquierdo, objeto);
            return nodo;
        } else {
            nodo.derecho = this._eliminarNodo(nodo.derecho, objeto);
            return nodo;
        }
    }

    encontrarMinNodo(nodo) {
        if (nodo.izquierdo === null) {
            return nodo;
        } else {
            return this.encontrarMinNodo(nodo.izquierdo);
        }
    }

    visualizarInventario(nodo, ul) {
        if (nodo !== null) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = nodo.imagen;
            li.appendChild(img);
            li.appendChild(document.createTextNode(` ${nodo.objeto}: ${nodo.cantidad}`));
            ul.appendChild(li);
    
            this.visualizarInventario(nodo.izquierdo, ul);
            this.visualizarInventario(nodo.derecho, ul);
        }
    }
}

let arbol = new ArbolDeInventario();

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let objeto = document.getElementById('objeto').value;
    let cantidad = document.getElementById('cantidad').value;
    let imagen = document.getElementById('imagen').value;
  
    arbol.agregarNodo(objeto, parseInt(cantidad), imagen);
  
    let ul = document.getElementById('lista-inventario');
    ul.innerHTML = '';
    arbol.visualizarInventario(arbol.raiz, ul);
});

document.getElementById('formulario-eliminar').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let objeto = document.getElementById('objeto-eliminar').value;
  
    arbol.eliminarNodo(objeto);
  
    let ul = document.getElementById('lista-inventario');
    ul.innerHTML = '';
    arbol.visualizarInventario(arbol.raiz, ul);
});
