import {
  red, green, bgYellow, bgWhite, bold, // colors
  parse // date
} from './deps.ts'

const myDate = parse('10-10-2022', 'dd-mm-yyyy')

console.log(typeof myDate)

console.log(bgYellow(bold(red('Hello Deno!'))))

console.log(bgWhite(bold(green('Hello Deno!'))))