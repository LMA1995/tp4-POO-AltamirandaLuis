/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.


class Contacto {
    #nombre;
        #telefono;
    constructor(nombre,telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }
    get nombre(){
      return  this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }
    get telefono(){
       return this.#telefono;
    }
    set telefono(nuevoTelefono){
        this.#telefono=nuevoTelefono;
    }
}
class Agenda {
    constructor(tamanio =10){
        this.#contactos= [];
        this.#tamanio= tamanio
    }
    get contactos(){
        return this.#contactos;
    }
    set contactos (nuevoContacto){
        this.#contactos.push(nuevoContacto)
    }
    get tamanio()
    {
       return this.tamanio;
    }
    set tamanio(nuevoTamanio)
    {
        this.#tamanio=nuevoTamanio
    }
}*/
// Definimos la clase Contacto
class Contacto {
    constructor(nombre, telefono) {
      this._nombre = nombre;
      this._telefono = telefono;
    }
    getnombre(){
      return this._nombre;
    }
    setnombre(nuevoNombre){
      this._nombre= nuevoNombre;
    }
    gettelefono(){
      return this._telefono;
    }
    settelefono(nuevoTelefono){
      this._telefono=nuevoTelefono;
    }
  
    // Sobrescribimos el método equals para que dos contactos sean iguales si tienen el mismo nombre
    equals(contacto) {
      return this.nombre === contacto.nombre;
    }
  }
  
  // Definimos la clase Agenda
  class Agenda {
    constructor(tamanio = 10) {
      this._contactos = [];
      this._tamanio = tamanio;
    }
    getcontactos(){
      return this._contactos;
    }
    gettamanio(){
      return this._tamanio;
    }
  
    // Método para añadir un contacto
    aniadirContacto(contacto) {
      if (this._contactos.length < this._tamanio) {
        this._contactos.push(contacto);
        window.alert("Contacto añadido correctamente.");
      } else {
       window.alert("La agenda está llena, no se pueden añadir más contactos.");
      }
    }
  
    // Método para comprobar si un contacto existe en la agenda
    existeContacto(contacto) {
      return this._contactos.some((c) => c.equals(contacto));
    }
  
    // Método para listar todos los contactos de la agenda
    listarContactos() {
      window.alert("Contactos:");
      this._contactos.forEach((contacto) => {
        window.alert(`- ${contacto.getnombre()}: ${contacto.gettelefono()}`);
      });
    }
  
    // Método para buscar un contacto por su nombre
    buscarContacto(nombre) {
      const contactoEncontrado = this._contactos.find((contacto) => contacto.getnombre() === nombre.toLowerCase());
      if (contactoEncontrado) {
        window.alert(`El teléfono de ${nombre} es ${contactoEncontrado._telefono}.`);
      } else {
        window.alert(`No se ha encontrado ningún contacto con el nombre ${nombre}.`);
      }
    }
  
    // Método para eliminar un contacto
    eliminarContacto(contacto) {
      const index = this._contactos.findIndex((c) => c.equals(contacto));
      if (index !== -1) {
        this._contactos.splice(index, 1);
        window.alert("Contacto eliminado correctamente.");
      } else {
        window.alert("No se ha encontrado ningún contacto con ese nombre.");
      }
    }
  
    // Método para comprobar si la agenda está llena
    agendaLlena() {
      return this._contactos.length === this._tamanio;
    }
  
    // Método para calcular los huecos libres en la agenda
    huecosLibres() {
      return this._tamanio - this._contactos.length;
    }
  }
  
  // Creamos una nueva agenda con un tamaño por defecto de 10
  const miAgenda = new Agenda();
 
  
  // Creamos un menú de opciones para que el usuario pueda interactuar con la agenda
  // Mostrar el menú de opciones al usuario
let opcion;
do {
    opcion = prompt(`
        Seleccione una opción:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Salir
    `);
    switch (opcion) {
        case "1":
            const nombre = prompt("Introduzca el nombre del contacto:");
            const telefono = prompt("Introduzca el teléfono del contacto:");
            const contacto = new Contacto(nombre, telefono);
           miAgenda.aniadirContacto(contacto);
            break;
        case "2":
            const nombreBusqueda = prompt("Introduzca el nombre del contacto que desea buscar:");
            miAgenda.buscarContacto(nombreBusqueda);
            break;
        case "3":
            const nombreEliminacion = prompt("Introduzca el nombre del contacto que desea eliminar:");
            const contactoAEliminar = miAgenda.contactos.find((c) => c.nombre === nombreEliminacion);
            miAgenda.eliminarContacto(contactoAEliminar);
            window.alert(`El contacto ${contactoAEliminar.nombre} ha sido eliminado`)
            break;
        case "4":
            miAgenda.listarContactos();
            break;
       
            case "5":
           window.alert('Adios')
            break;
            
        default:
            console.log("Opción inválida. Intente de nuevo.");
    }
} while (opcion !== "5");
