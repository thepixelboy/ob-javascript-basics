// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"

function sinParametros() {
  return true
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve()
  }, 5000)
})

miPromesa.then(() => console.log("Hola soy una promesa"))
// - Una función generadora de índices pares automáticos
function* generarIndicePar() {
  let num = 1

  while(true) {
    num *= 2
    yield num
  }
}

const gen = generarIndicePar()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
