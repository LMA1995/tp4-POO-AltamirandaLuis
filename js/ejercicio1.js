/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó*/

let auto = {
    marca:'Toyota',
    color:'Rojo',
    modelo:'Corolla',

    encendido :()=>{
        document.write('<br>El vehiculo esta encendido');
    
    },

    apagado :()=>{
        document.write('<br>El vehiculo esta apagado');

    }
}

document.write('Marca :'+auto.marca);
document.write('<br> Color :'+auto.color);
document.write('<br> Modelo :'+auto.modelo);
 auto.encendido();
 ('<br>');
 auto.apagado();
