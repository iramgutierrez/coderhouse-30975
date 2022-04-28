const fin = () => console.log('terminé');

function mostrarLetras(string, endFn) {
  let i = 0;
  const thisInterval = setInterval(() => {
    if (i === string.length - 1) {
      endFn();
      clearInterval(thisInterval);
    }
    console.log(string[i]);
    i++;
  }, 1000);
}

setTimeout(() => mostrarLetras('Hola', fin), 700);
setTimeout(() => mostrarLetras('Hola', fin), 1500);
setTimeout(() => mostrarLetras('Hola', fin), 2000);