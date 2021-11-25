import Product from "./proceso.js";
import Inventory from "./inventory.js";

class App {
  constructor() {
    this._inventory = new Inventory();
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addProduct);

    let btnFind = document.querySelector("#btnFind");
    btnFind.addEventListener("click", this._search);

    let btnDelete = document.querySelector("#btnDelete");
    btnDelete.addEventListener("click", this._delete);

    let btnList = document.querySelector("#btnList");
    btnList.addEventListener("click", this._list);

    let btnListInversa = document.querySelector("#btnListInversa");
    btnListInversa.addEventListener("click", this._listInversa);
  }

  _readProduct() {
    //leer los inputs (la entrada de datos)
    let inpName = document.querySelector("#name");
    let inpTiempo = document.querySelector("#tiempo");

    //obtener el valor
    let name = inpName.value; //string
    let tiempo = Number(inpTiempo.value); //número

    //si cada campo tiene un valor ó que tenga info.
    if (name && tiempo) {
      //se limpia el formulario
      inpName.value = "";
      inpTiempo.value = "";

      //se crea al participante
      return new Product(name, tiempo);
    }
    //si falta algún campo, entonces regresa false
    return false;
  }

  _addProduct = () => {
    let product = this._readProduct();

    if (!product) {
      document.getElementById("elementAdd").innerHTML =
        "Error todos los elementos son requeridos";
      return false;
    }
    let added = this._inventory.add(product);

    if (added === 2) {
      document.getElementById("elementAdd").innerHTML =
        "Error, Producto ya registrado";
      return false;
    }
    if (added === 1) {
      document.getElementById("elementAdd").innerHTML =
        "Se agrego correctamente nuevo producto";
      return true;
    }

    if (added === 3) {
      document.getElementById("elementAdd").innerHTML =
        "No puedes agregar mas de 20 productos";
      return false;
    }
  };

  _delete = () => {
    let inpIdDelete = document.querySelector("#idDelete");
    let idDelete = inpIdDelete.value;

    document.getElementById("elementDelete").innerHTML =
      this._inventory.eliminar(idDelete);
  };

  _search = () => {
    let inpIdProduct = document.querySelector("#idProduct");
    let idProduct = inpIdProduct.value;

    document.getElementById("productFind").innerHTML =
      this._inventory.buscar(idProduct);
  };

  _list = () => {
    document.getElementById("lista").innerHTML = this._inventory.listar();
  };

  _listInversa = () => {
    document.getElementById("listaInversa").innerHTML =
      this._inventory.listarInverso();
  };
}
new App();
