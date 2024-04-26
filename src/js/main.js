console.log("Funciones")

// Funciones: Acciones que repetimos
// En código se le pueden pasar parametros y pueden devolver algo.

// Método es una función, solo que está en una clase. Por ej: Math.pow() -> llama primero a la clase Math

//console.log(confirm("¿Está seguro?")) // retorna true o false. Alert no retorna nada

console.groupCollapsed("Función declarativa")
// Se puede llamar antes de crearla

// Parámetros se colocan cuando se crea la función y se usa adentro
// Argumentos son los datos que se pasan cuando se llama a la función

function saludar(nombre) { // nombre es el parámetro
    console.log(`Hola! ${nombre}`)
}

saludar("Caro") // Ejecutar o llamar la función. Caro es el argumento

console.groupEnd()


console.groupCollapsed("Función expresiva")
// Sigue las reglas tradicionales, no se puede llamar antes de su creación

const dos = function(){
    console.log("Esta es función expresiva")
}

dos()

console.groupEnd()