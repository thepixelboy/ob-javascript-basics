// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch
const winston = require("winston")

const logger = winston.createLogger({
  level: "warn",
  format: winston.format.json(),
  defaultMeta: {service: "user-service"},
  transports: [
    new winston.transports.File({filename: "./09-gestion-de-errores/error.log", level: "error"})
  ]
})

function doble(num) {
  if (typeof num === "number") {
    return 2 * num
  }

  throw new Error("El valor debe ser de tipo numérico")
}

try {
  const miNumero = "184"

  console.log(doble(miNumero))
} catch (err) {
  logger.error(`Ha ocurrido un problema al ejecutar la función. ${err}`)
}