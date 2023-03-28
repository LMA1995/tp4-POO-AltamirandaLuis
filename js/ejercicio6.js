/*- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
class Libro {
    constructor(isbn, titulo,autor,numPaginas)
    {
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numPaginas=numPaginas;
    }
    getIsbn(){
        return this.isbn;
    }
    setIsbn(){
        this.isbn=isbn;
    }
    getTitulo(){
        return this.titulo;
    }
    setTitulo(){
        this.titulo=titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor (){
        this.autor=autor;
    }
    getNumPaginas(){
        return this.numPaginas;
    }
    setNumPaginas(){
        this.numPaginas=numPaginas;
    }
    mostrarLibro(){
        document.write(`<br>El libro ${this.titulo} con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numPaginas}paginas`)
    }
  
}

let libro1= new Libro('12345678','Memorias de una vieja cancion', 'Luciano Pereyra',1000);
let libro2= new Libro('01234567', 'Desde que tu te has ido','Luciano Pereyra',495);
libro1.mostrarLibro();
libro2.mostrarLibro();
if (libro1.numPaginas>libro2.numPaginas)
{
document.write(`<br> ${libro1.titulo} tiene mayor cantidad de paginas que ${libro2.titulo}`)
}
else if (libro2.numPaginas>libro1.numPaginas){
document.write(`<br> ${libro2.titulo} tiene mayor cantidad de paginas que ${libro1.titulo}`);
}
else{
document.write(`<br> ${libro1.titulo} y ${libro2.titulo}tienen la misma cantidad de paginas`)
}


