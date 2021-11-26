export default class ListaBases {
  constructor() {
    this.inicio = null;
  }

  add(nuevabase) {
    if (this._buscar(nuevabase.getName() == false)) {
      if (this.inicio == null) {
        this.inicio = base;
        nuevabase.setSiguiente(this.inicio);
        nuevabase.setAnterior(this.inicio);
        return 1;
      } else {
        let ultimo = this.inicio.getAnterior();
        nuevabase.setSiguiente(this.inicio);
        nuevabase.setAnterior(ultimo);
        ultimo.setSiguiente(nuevabase);
        this.inicio.setAnterior(nuevabase);
        return 1;
      }
    } else {
      return 2;
    }
  }

  buscar(nombrebase) {
    let encontrarbase = "La base no existe";
    let aux = this.inicio;
    do {
      if (aux.getName() == nombrebase) {
        encontrarbase = ` Base encontrada: ${aux.getName()}  <br>`;
        return product;
      }
      aux = aux.getSiguiente();
    } while (aux != this.inicio);

    return product;
  }

  _buscar(nombrebase) {
    let aux = this.inicio;
    do {
      if (aux.getName() == nombrebase) {
        return true;
      }
      aux = aux.getSiguiente();
    } while (aux != this.inicio);

    return false;
  }

  eliminar(idDelete) {
    let product = "El producto no existe";
    let elim = null;
    if (idDelete == this.inicio.getId()) {
      elim = this.inicio;
      this.inicio = this.inicio.getSiguiente();
      elim.setSiguiente(null);
      if (this.inicio != null) {
        this.inicio.setAnterior(null);
      }
      product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
      return product;
    }
    let temp = this.inicio;
    while (temp.getSiguiente() != null) {
      if (temp.getSiguiente().getId() == idDelete) {
        elim = temp.getSiguiente();
        if (elim.getSiguiente() != null) {
          temp.setSiguiente(temp.getSiguiente().getSiguiente());
          elim.getSiguiente().setAnterior(temp);
          elim.setSiguiente(null);
          elim.setAnterior(null);
          product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
          return product;
        } else {
          temp.setSiguiente(null);
          elim.setAnterior(null);
          product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
          return product;
        }
      }
      temp = temp.getSiguiente();
    }
    return product;
  }

  listar() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Productos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = ` ${lista}  ${num}  ---->  ID: ${aux.getId()}  Nombre:  ${aux.getName()} Cantidad:  ${aux.getQuantity()}  Costo: $  ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux
          .getSiguiente()
          .getName()}  <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = ` ${lista}  ${num} ----> ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux.getSiguiente()}  <br>`;
    }
    return lista;
  }

  listarInverso() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Productos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = `  ${num}  ---->  ID: ${aux.getId()}  Nombre:  ${aux.getName()} Cantidad:  ${aux.getQuantity()}  Costo: $  ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux
          .getSiguiente()
          .getName()} <br> ${lista} <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = `  ${num} ----> ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux.getSiguiente()}<br> ${lista}  <br>`;
    }
    return lista;
  }
}
