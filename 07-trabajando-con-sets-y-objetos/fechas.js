// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
let fechaHoy = new Date();

// - La fecha de tu nacimiento
const miAniversario = new Date(1984, 3, 18)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparaFechas = fechaHoy > miAniversario

// - Una variable que contenga el día de tu nacimiento
const miDia = miAniversario.getDate()

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const miMes = miAniversario.getMonth()

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const miAnio = miAniversario.getFullYear()
