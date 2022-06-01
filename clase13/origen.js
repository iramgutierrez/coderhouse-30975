const lista = [2, 3, 5, 7]

lista.map(x => x*x).forEach(x => console.log(x))

let a // false, null, undefined, "", 0
let b = 5

a ??= b

console.log({ a })
