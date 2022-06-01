"use strict";
class Color {
    constructor() {
        this.getColor = () => {
            return (`${this.red},${this.blue},${this.green}`);
        };
        this.red = Math.round(Math.random() * 255);
        this.blue = Math.round(Math.random() * 255);
        this.green = Math.round(Math.random() * 255);
    }
}
const myColor = new Color();
console.log(myColor.getColor());
