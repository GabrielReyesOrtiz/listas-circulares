export default class Base {
  constructor(name, tiempo) {
    this._name = name;
    this._tiempo = tiempo;
    this._siguiente = null;
    this._anterior = null;
  }

  getName() {
    return this._name;
  }
  getTiempo() {
    return this._tiempo;
  }

  setName(name) {
    this._name = name;
  }

  setTiempo(tiempo) {
    this._tiempo = tiempo;
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
