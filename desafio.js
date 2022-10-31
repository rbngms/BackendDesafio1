class Usuario{
  constructor(nombre, apellido, libros, mascotas){
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
  }

  getFullName() {
      return `El nombre completo es ${this.nombre} ${this.apellido}.`;
  }

  addmascota(newMascota){
      this.mascotas.push(newMascota);
  }

  getMascotas(){
      return this.mascotas.length;
  }

  addBook(book, autor){
      this.libros.push( {
          "nombre": book,
          "autor": autor
      });
  }

  getBooks(){
      let nombresLibros = []
      this.libros.forEach(item => nombresLibros.push(item.nombre));
      return nombresLibros;
  }
}

let mascotas = ["Lulu", "Michifuz"];
let libros = [
  {
  "nombre": "Trampas del dinero",
  "autor": "Dan Ariely"
  },
  {
  "nombre": "Amazon Desatado",
  "autor": "Brad Stone"
  }]
//A
let usuario = new Usuario("Ruben","Garay", libros, mascotas);
console.log(usuario.getFullName());

//B
usuario.addmascota("Señor Gato");
usuario.addmascota("Pipel");

//C
console.log(`Cantidad de Mascotas: ${ usuario.getMascotas() }.`);

//D
usuario.addBook("Batiendo WallStreet","Peter Lynch")

//E
console.log(usuario.getBooks());
