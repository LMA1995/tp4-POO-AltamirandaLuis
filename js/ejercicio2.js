/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

let cuenta = {
    titular: 'Alex',
    saldo : .0,
    agregar : function (cantidad)
    {
        cantidad=parseFloat(prompt('Ingrese la cantidadad'));
        if (cantidad<=0)
        {
            document.write('ingrese una cantidad valida');
        }
        else {
            this.saldo +=cantidad;
            document.write(`<br>Se ha depositado ${cantidad} en la cuenta`);
            
        }
    },
    extraer : function (cantidad){
        cantidad=parseFloat(prompt('Ingrese la cantidad de dinero a extraer'));
        if(cantidad>this.saldo){
            document.write(`La cantidad de dinero ingresada supera el saldo disponible`)
        }
        else{
            this.saldo-=cantidad;
            document.write(`<br> Se extrajeron $ ${cantidad} pesos`)
            this.informar();
        }

    },
    informar : function(){
            document.write(`<br>Titular de la cuenta: ${this.titular}`);
            document.write('<p>-------------------------------</p>')
            document.write(`<br>Saldo Actual : $${this.saldo} `);
    }
}
document.write(`<br>El titular de la cuenta es ${cuenta.titular}`)
document.write(`<br>El monto inicial de la cuenta es $ ${ cuenta.saldo }`)
cuenta.agregar();
cuenta.extraer();
