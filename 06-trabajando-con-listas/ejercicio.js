// Crea un archivo JS que contenga las siguientes líneas:

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Patatas", "Aceite de Oliva", "Huevos", "Tomates", "Pimientos", "Manzanas", "Naranjas"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol")

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let listaPeliculasFavoritas = [
  {
    titulo: "Star Wars",
    director: "George Lucas",
    fecha: new Date(1977, 4, 25) // Month is 0 based
  },
  {
    titulo: "Guardians of the Galaxy",
    director: "James Gunn",
    fecha: new Date(2014, 7, 1) // Month is 0 based
  },
  {
    titulo: "Bram Stoker's Dracula",
    director: "Francis Ford Coppola",
    fecha: new Date(1992, 9, 13) // Month is 0 based
  }
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let fecha = new Date(2010, 0, 1) // Month is 0 based
let listaPeliculas = listaPeliculasFavoritas.filter(valor => valor.fecha > fecha)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let listaDirectores = listaPeliculasFavoritas.map(valor => valor.director)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let listaTitulos = listaPeliculasFavoritas.map(valor => valor.titulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let listaDirectoresTitulos = listaDirectores.concat(listaTitulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let listaDirectoresTitulos2 = [...listaDirectores, ...listaTitulos]
