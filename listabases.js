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
        return encontrarbase;
      }
      aux = aux.getSiguiente();
    } while (aux != this.inicio);

    return encontrarbase;
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

  eliminar(baseDelete) {
    let temp = this.inicio;
    let elim = null;
    let baseEliminada = "La base no existe";

    if (baseDelete == this.inicio.getName()) {
      elim = this.inicio;
      this.inicio = this.inicio.getSiguiente();
      elim.getSiguiente().setAnterior(elim.getAnterior());
      elim.getAnterior().setSiguiente(elim.getSiguiente());
      elim.setSiguiente(null);
      elim.setAnterior(null);

      baseEliminada = `La base eliminada es:  ${elim.getName()} <br>`;
      return baseEliminada;
    }
    do {
      if (temp.getSiguiente().getName() == baseDelete) {
        elim = temp.getSiguiente();
        temp.setSiguiente(elim.getSiguiente());
        elim.getSiguiente().setAnterior(temp);
        elim.setSiguiente(null);
        elim.setAnterior(null);
        baseEliminada = `La base eliminada es:  ${elim.getName()} <br>`;
        return baseEliminada;
      }

      temp = temp.getSiguiente();
    } while (temp != this.inicio);

    return baseEliminada;
  }

  listar() {
    let lista = "";
    let aux = this.inicio;

    if (this.inicio == null) {
      return "No se han agregado Bases";
    } else {
      do {
        lista = ` ${lista} ---->  Nombre de base:  ${aux.getName()}  Tiempo: $ ${aux.getTiempo()}
                  Su base anterior es:  ${aux.getAnterior().getName()} 
                  Su siguiente base es:  ${aux.getSiguiente().getName()}  <br>`;
        aux = aux.getSiguiente();
      } while (aux != this.inicio);
    }
    return lista;
  }

  crearTarjeta(base, hora, minutos) {
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
