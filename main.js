import Base from "./base.js";
import ListaBases from "./listabases.js";

class App {
  constructor() {
    this._listaBases = new ListaBases();
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addBase);

    let btnDelete = document.querySelector("#btnDelete");
    btnDelete.addEventListener("click", this._delete);

    let btnFind = document.querySelector("#btnFind");
    btnFind.addEventListener("click", this._search);

    let btnList = document.querySelector("#btnList");
    btnList.addEventListener("click", this._list);
  }

  _readBase() {
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
      return new Base(name, tiempo);
    }
    //si falta algún campo, entonces regresa false
    return false;
  }

  _addBase = () => {
    let base = this._readBase();

    if (!base) {
      document.getElementById("elementAdd").innerHTML =
        "Error todos los elementos son requeridos";
      return false;
    }
    let added = this._listaBases.add(base);

    if (added === 2) {
      document.getElementById("elementAdd").innerHTML =
        "Error, Base  ya registrada";
      return false;
    }
    if (added === 1) {
      document.getElementById("elementAdd").innerHTML =
        "Se agrego correctamente nueva Base";
      return true;
    }
  };

  _delete = () => {
    let inpIdDelete = document.querySelector("#baseDelete");
    let baseDelete = inpIdDelete.value;

    document.getElementById("elementDelete").innerHTML =
      this._listaBases.eliminar(baseDelete);
  };

  _search = () => {
    let inpIdBuscar = document.querySelector("#basefind");
    let nameBase = inpIdBuscar.value;

    document.getElementById("baseFinded").innerHTML =
      this._listaBases.buscar(nameBase);
  };

  _list = () => {
    document.getElementById("lista").innerHTML = this._listaBases.listar();
  };
}
new App();
