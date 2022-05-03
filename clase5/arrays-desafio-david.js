const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

const nombres = productos.map((producto) => producto.nombre).join(",");

const precios = productos.map(({ precio }) => precio);

const precioTotal = productos.reduce(
  (total, producto) => total + producto.precio,
  0
);

const precioPromedio = precioTotal / precioTotal.length;
const productoBarato = Math.min(...precios);
const productoCaro = Math.max(...precios);

const update = productos.filter(({ id }) => id < 6 && id > 0);