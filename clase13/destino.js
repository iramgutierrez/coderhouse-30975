"use strict";

var _a;

var lista = [2, 3, 5, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
var a; // false, null, undefined, "", 0

var b = 5;
(_a = a) !== null && _a !== void 0 ? _a : a = b;
console.log({
  a: a
});
