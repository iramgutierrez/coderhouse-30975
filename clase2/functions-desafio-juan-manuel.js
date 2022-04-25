// function mostrarLista(lista){
//     return lista || "lista vacia"
// }

const mostrarLista=(lista)=>lista || "lista vacia"

console.log(mostrarLista([1,2,3]))
console.log(mostrarLista())

function crearMultiplicador(num1){
    return (num2)=>num1*num2
}

const duplicar=crearMultiplicador(2)
const triplicar=crearMultiplicador(3)

console.log(duplicar(4))
console.log(triplicar(4))