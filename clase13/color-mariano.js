class Color {

  generarColor = () => {

      return `color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
}

const colorRam = new Color;

console.log(colorRam.generarColor());