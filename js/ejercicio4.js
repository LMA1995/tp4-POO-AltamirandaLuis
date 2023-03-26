/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto {
    constructor (codigo,nombre,precio)
    {
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    mostrarDatos (){
        
        document.write(`<br>Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`)
       
    }
    
}
const productos=[
    new Producto('pel00001','Pelota futbol 5',10000),
    new Producto('mon0002','Monitor LG',40000),
    new Producto('gab00003','Gabinete Red Dragon', 50000)
];
for(let i=0; i<productos.length; i++)
{
 productos[i].mostrarDatos();
}