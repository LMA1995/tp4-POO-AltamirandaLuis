//-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Métodos para modificar y mostrar propiedades
    modificarAlto(alto) {
      this.alto = alto;
    }
  
    modificarAncho(ancho) {
      this.ancho = ancho;
    }
  
    mostrarAlto() {
      return this.alto;
    }
  
    mostrarAncho() {
      return this.ancho;
    }
  
    // Métodos para calcular perímetro y área
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  // Ejemplo de uso
  const rectangulo1 = new Rectangulo(5, 10);
  document.write('Rectangulo 1')
  document.write('<br> alto: '+rectangulo1.mostrarAlto()); // Output: 5
  document.write('<br> ancho:'+rectangulo1.mostrarAncho()); // Output: 10
  document.write('<br> perimetro: '+rectangulo1.calcularPerimetro()); // Output: 30
  document.write('<br> area: '+rectangulo1.calcularArea()); // Output: 50
  
  rectangulo1.modificarAlto(7);
  document.write('<br> Modificacion alto: '+rectangulo1.mostrarAlto()); // Output: 7
  
  rectangulo1.modificarAncho(15);
  document.write('<br> Modificacion ancho: '+rectangulo1.mostrarAncho()); // Output: 15
  
  document.write('<br> Nuevo Perimetro: '+rectangulo1.calcularPerimetro()); // Output: 44
  document.write('<br> Nueva Area: '+rectangulo1.calcularArea()); // Output: 105
document.write('<p>----------------------------------------------------</p>')
  const rectangulo2 = new Rectangulo(10, 20);
  document.write('<br>Rectangulo 2')
  document.write('<br>alto: '+rectangulo2.mostrarAlto()); // Output: 10
  document.write('<br> ancho:'+rectangulo2.mostrarAncho()); // Output: 20
  document.write('<br> perimetro: '+rectangulo2.calcularPerimetro()); // Output: 60
  document.write('<br> area: '+rectangulo2.calcularArea()); // Output:200
  
  rectangulo2.modificarAlto(15);
  document.write('<br> Modificacion alto: '+rectangulo1.mostrarAlto()); // Output: 15
  
  rectangulo1.modificarAncho(25);
  document.write('<br> Modificacion ancho: '+rectangulo1.mostrarAncho()); // Output: 25
  
  document.write('<br> Nuevo Perimetro: '+rectangulo1.calcularPerimetro()); // Output:80
  document.write('<br> Nueva Area: '+rectangulo1.calcularArea()); // Output: 375
  
