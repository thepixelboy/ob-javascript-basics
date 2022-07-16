// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
class Estudiante {
  nombre = "John Doe";
  asignaturas = ["Javascript", "HTML", "CSS"];

  obtenDatos() {
    return {
      nombre: this.nombre,
      aisgnaturas: this.asignaturas
    }
  }
}

// - Crea una nueva instancia de "Estudiante"
const estudiante = new Estudiante();

// - Haz la llamada al método obtenDatos
console.log(estudiante.obtenDatos());