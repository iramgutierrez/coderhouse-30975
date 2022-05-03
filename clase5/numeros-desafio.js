
const generateNumbers = () => {
  const numbers = []
  for (let i = 1; i <= 1000; i++) {
    numbers.push(Math.round(Math.random() * 20))
  }

  return numbers
}

const numbers = generateNumbers()

/*const numbersObj = {}

for (let i = 0; i < 1000; i++) {
  const number = numbers[i]
  if ( !(number in numbersObj) ) {
    numbersObj[number] = 0
  }

  numbersObj[number]++
}

console.log(numbersObj)*/

/*const total = [1, 3, 5, 6, 7].reduce((acc, element) => {
  acc = acc + element
  return acc
}, 0)

console.log({ total})

return*/

const numbersObj = numbers.reduce((acc, element) => {
  if ( !(element in acc) ) {
    acc[element] = 0
  }

  acc[element]++

  return acc
}, {})

console.log(numbersObj)


const strings = ['abc', 'def', 'ghi']

console.log(strings.join(', '))