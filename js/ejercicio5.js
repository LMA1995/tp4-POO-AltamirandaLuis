/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
    constructor (nombre,dni,edad,sexo,peso,altura,nacimiento){
        this.nombre=nombre;
        this.dni=dni ||this.generaDni();
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.nacimiento=nacimiento;
    }
    mostrarGeneracion(){
        if(this.nacimiento >=1994 && this.nacimiento<=2010)
        {
            document.write(`<br> ${this.nombre} nacio en el año ${this.nacimiento} por lo tanto pertenece a la generacion Z`);
        }
        else if(this.nacimiento>= 1981 && this.nacimiento<=1993)
        {
            document.write(`<br> ${this.nombre} nacio en el año ${this.nacimiento} por lo tanto pertenece a la generacion Y`);
        }
        else if(this.nacimiento >=1969 && this.nacimiento<=1080)
        {
            document.write(`<br> ${this.nombre} nacio en el año ${this.nacimiento} por lo tanto pertenece a la generacion X`);
        }
        else if(this.nacimiento>=1949 && this.nacimiento<=1968)
        {
            document.write(`<br> ${this.nombre} nacio en el año ${this.nacimiento} por lo tanto pertenece a la generacion Baby Boom`);
        }
        else if (this.nacimiento>=1930 && this.nacimiento<=1948){
            document.write(`<br> ${this.nombre} nacio en el año ${this.nacimiento} por lo tanto pertenece a la generacion Los niños de la posguerra`);
        }
        else {
            document.write(`<br>${this.nombre} No corresponde a ninguna generacion por su reciente nacimiento`)
        }
    }
    esMayorDeEdad () {
        if (this.edad >=18)
        {
            return document.write(`<br> ${this.nombre} es mayor de edad por tener 18 años o mas`);
        }
        else{
           return document.write(`<br> ${this.nombre} es menor de edad por tener menos de 18 años`);
        }
    }
    mostrarDatos (){
        document.write(`Nombre ${this.nombre}, DNI ${persona.generaDni()}, Edad ${this.edad}, Sexo ${this.sexo} , Peso ${this.peso}, Altura ${this.altura}, Año de nacimiento ${this.nacimiento}`)
    }
    generaDni ()
    {
        const numDNI= Math.floor(Math.random()*100000000);
        return numDNI;
    }
}
const persona= new Persona('Luis Miguel','dni',15 ,'Hombre', 92,1.72,1995);
persona.mostrarDatos();
persona.esMayorDeEdad();
persona.mostrarGeneracion();
document.write('<p>----------------------------------------------</p>')
const persona2= new Persona('John','dni',1,'Hombre', 30,1.05,2022);
persona2.mostrarDatos();
persona2.esMayorDeEdad();
persona2.mostrarGeneracion();

