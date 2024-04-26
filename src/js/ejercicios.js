// Ejercicios

// Notificación

function enviaNotificacionCompleta(coder, saludo, despedida) {
    console.log(`${saludo} ${coder}, ${despedida}`)
}

enviaNotificacionCompleta("Caro", "Hola, que tengas un buen día", "Nos vemos pronto")

function enviaNotificación(coder, mensaje) {
    console.log(`${mensaje} ${coder}.`)
}

enviaNotificación("Caro", "¡Hola!, que tengas un buen día") 
enviaNotificación("Caro", "¡Adiós. Nos vemos pronto!")

// Login

function obtenerUsuario() {
    
    let usuario = prompt("Ingresa tu usuario")
    let contraseña = parseInt(prompt("Ingresa tu contraseña"))
    
    return {usuario, contraseña}
}

function comprobarUsuario(usuario) {
    if (usuario.usuario === "admin" && usuario.contraseña === 12345) {
        console.log(`Bienvenido ${usuario.usuario}`)
    } else {
        console.error("No eres admin")
    }
    
}

let usuario = obtenerUsuario()
comprobarUsuario(usuario) 

// comprobarUsuario(obtenerUsuario())
