// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatosPersonales = {
  nombre: "John",
  apellido: "Doe",
  edad: 36,
  altura: 176,
  eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
let miEdad = misDatosPersonales.edad

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosPersonales = [misDatosPersonales, {
  nombre: "Jane",
  apellido: "Doe",
  edad: 34,
  altura: 175,
  eresDesarrollador: true
}, 
{
  nombre: "Sarah",
  apellido: "Smith",
  edad: 37,
  altura: 172,
  eresDesarrollador: false
}]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const gente = datosPersonales.sort((a, b) => b.edad - a.edad)
