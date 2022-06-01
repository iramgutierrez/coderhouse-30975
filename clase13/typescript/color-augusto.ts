class Color{
  red: number;
  blue: number;
  green: number;

  constructor(){
      this.red = Math.round(Math.random() * 255);
      this.blue = Math.round(Math.random() * 255);
      this.green = Math.round(Math.random() * 255);
  }

  getColor = ():string => {
      return (`${this.red},${this.blue},${this.green}`)
  }
}

const myColor:Color = new Color();

console.log(myColor.getColor());