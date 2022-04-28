const fin = () => console.log('terminé')

const mostrarLetras = (str, fnc) => {
    for (let i = 0; i < str.length; i++) {
        setTimeout(() => {
            console.log(str[i])
        }, 1000 * (i +1))
    }
    
    setTimeout(() => {
        fnc()
    }, 1000 * str.length)
}

mostrarLetras('¡Hola!', fin)
return

setTimeout(() => {
  mostrarLetras('¡Hola!', fin)
}, 700)

setTimeout(() => {
  mostrarLetras('¡Hola!', fin)
}, 1500)

setTimeout(() => {
  mostrarLetras('¡Hola!', fin)
}, 2000)