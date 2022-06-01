class Color {
  constructor(height, width) {
      this.rgb = [-1, -1, -1]
  }

  randomRgb = () => {
      this.rgb = this.rgb.map((_color) => Math.floor(Math.random() * 255))
  }
}

const rgb = new Color()

rgb.randomRgb()
console.log(rgb)