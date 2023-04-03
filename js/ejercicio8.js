/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/
class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      document.write(`<br>Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  
    despedirse() {
      document.write(`<br>Adiós, ${this.nombre} se despide.`);
    }
  }
  
  // Crear dos objetos de la clase Persona
  const persona1 = new Persona("Juan", 30, "programador");
  const persona2 = new Persona("Ana", 25, "diseñadora");
  
  // Llamar a los métodos saludar y despedirse de cada objeto
  persona1.saludar(); // Hola, mi nombre es Juan, tengo 30 años y soy programador.
  persona1.despedirse(); // Adiós, Juan se despide.
  
  persona2.saludar(); // Hola, mi nombre es Ana, tengo 25 años y soy diseñadora.
  persona2.despedirse(); // Adiós, Ana se despide.
  