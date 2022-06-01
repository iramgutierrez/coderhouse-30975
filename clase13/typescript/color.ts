class RandomColor {
  constructor() {}

  generate ():string {
    const generateRandom = ():number => Math.round(Math.random() * 255)
    const r:number = generateRandom()
    const g:number = generateRandom()
    const b:number = generateRandom()

    return `${r}, ${g}, ${b}`
  }
}

const color = new RandomColor()

console.log(color.generate())