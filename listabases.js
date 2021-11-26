export default class ListaBases {
  constructor() {
    this.inicio = null;
    this.salida = null;
  }

  add(nuevabase) {
    if (this.inicio == null) {
      this.inicio = nuevabase;
      nuevabase.setSiguiente(this.inicio);
      nuevabase.setAnterior(this.inicio);
      return 1;
    } else {
      if (this._buscar(nuevabase.getName()) == false) {
        let ultimo = this.inicio.getAnterior();
        nuevabase.setSiguiente(this.inicio);
        nuevabase.setAnterior(ultimo);
        ultimo.setSiguiente(nuevabase);
        this.inicio.setAnterior(nuevabase);
        return 1;
      } else {
        return 2;
      }
    }
  }

  buscar(nombrebase) {
    let encontrarbase = "La base no existe";

    if (this.inicio == null) {
      return encontrarbase;
    }

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
    let baseEliminada = "La base no existe";
    if (this.inicio == null) {
      return baseEliminada;
    }

    let temp = this.inicio;
    let elim = null;

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
        lista = ` ${lista} ---->  Nombre de base:  ${aux.getName()}  Tiempo: ${aux.getTiempo()} minutos,
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
    let horas = Math.trunc(minutos / 60);
    let mins = minutos % 60;
    let cont = 0;
    let buscar = this._buscar(base);
    if (buscar == false) {
      return "Esta base no existe";
    }

    while (this.salida == null) {
      if (aux.getName() == base) {
        this.salida = aux;
      }
      aux = aux.getSiguiente();
    }
    let salida = this.salida;
    let res2 = 0;
    let totalH = hora + horas;
    for (let i = hora; i <= totalH; i++) {
      for (let a = res2; a < 60; ) {
        if (i == totalH) {
          if (mins >= a) {
            lista = ` ${lista}  Base  ${salida.getName()}  Horario:  ${i} horas con ${res2} minutos --->
                      Su siguiente base es:  ${salida
                        .getSiguiente()
                        .getName()}  y llegara en
                   ${salida.getSiguiente().getTiempo()} minutos. <br>`;
            mins = mins - a;
            a = salida.getSiguiente().getTiempo();
            res2 = res2 + salida.getSiguiente().getTiempo();
            cont = 2;
          } else {
            lista = ` ${lista} recorrido terminado, ya no le queda tiempo para llegar a su siguiente base, terminamos en ${salida
              .getAnterior()
              .getName()}`;
            return lista;
          }
        }

        if (cont == 1) {
          lista = ` ${lista}  Base  ${salida.getName()}  Horario:  ${i} horas con ${a} minutos --->
                
                  Su siguiente base es:  ${salida
                    .getSiguiente()
                    .getName()}  y llegara en
                   ${salida.getSiguiente().getTiempo()} minutos. <br>`;
          a = a + salida.getSiguiente().getTiempo();
          if (a > 60) {
            res2 = a % 60;
          }
        }

        if (cont == 0) {
          lista = `---->  Salimos de  ${salida.getName()}  Hora de salida:  ${hora} horas --->
                          Su siguiente base es:  ${salida
                            .getSiguiente()
                            .getName()} y llegara en
                   ${salida.getSiguiente().getTiempo()} minutos. <br>`;
          a = a + salida.getSiguiente().getTiempo();
          if (a > 60) {
            res2 = a % 60;
          }
          cont = 1;
        }
        salida = salida.getSiguiente();
      }
    }
  }
}
