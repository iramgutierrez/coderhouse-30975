import {
  red, green, bgYellow, bgWhite, bold
} from 'https://deno.land/std@0.125.0/fmt/colors.ts'

console.log(bgYellow(bold(red('Hello Deno!'))))

console.log(bgWhite(bold(green('Hello Deno!'))))