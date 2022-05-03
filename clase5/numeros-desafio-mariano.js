const randomNumber = [];

for(let i=0; i<1000; i++){
    randomNumber.push(Math.floor(Math.random()*100));
}

function calcularRepeticiones(array){
    let repeticiones = {};
    for(let i=0; i<array.length; i++){
        if(repeticiones[array[i]]){
            repeticiones[array[i]]++;
        }else{
            repeticiones[array[i]] = 1;
        }
    }
    return repeticiones;
}

console.log(calcularRepeticiones(randomNumber));