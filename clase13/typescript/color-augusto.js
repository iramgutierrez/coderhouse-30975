var Color = /** @class */ (function () {
    function Color() {
        var _this = this;
        this.getColor = function () {
            return ("".concat(_this.red, ",").concat(_this.blue, ",").concat(_this.green));
        };
        this.red = Math.round(Math.random() * 255);
        this.blue = Math.round(Math.random() * 255);
        this.green = Math.round(Math.random() * 255);
    }
    return Color;
}());
var myColor = new Color();
console.log(myColor.getColor());
