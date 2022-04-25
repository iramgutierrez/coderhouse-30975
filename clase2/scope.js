const x = 'declarada en el scope global'

function exampleFunction () {
  console.log(x)
}

exampleFunction()

console.log(x)