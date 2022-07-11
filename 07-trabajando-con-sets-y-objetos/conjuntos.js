// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
const familia = ["Jane Doe", "John Doe", "Mary Smith", "Marty Smith"]
const miFamilia = new Set(familia)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add("John Doe")

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("Javascript")
