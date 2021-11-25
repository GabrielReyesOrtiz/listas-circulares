export default class Proceso {
  constructor(name, tiempo) {
    this._name = name;
    this._tiempo = tiempo;
    this._siguiente = null;
    this._anterior = null;
  }

  getTiempo() {
    return this._tiempo;
  }

  getName() {
    return this._name;
  }

  setTiempo(tiempo) {
    this._tiempo = tiempo;
  }

  setName(name) {
    this._name = name;
  }

  getSiguiente() {
    return this._siguiente;
  }

  setSiguiente(siguiente) {
    this._siguiente = siguiente;
  }

  getAnterior() {
    return this._anterior;
  }

  setAnterior(anterior) {
    this._anterior = anterior;
  }
}
