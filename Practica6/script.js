function obtenerDatos() {
    const numeroDeDatos = prompt("Ingrese la cantidad de datos: ");
    const datos = [];

    for (let i = 0; i < numeroDeDatos; i++) {
        const dato = parseFloat(prompt(`Ingrese el dato #${i + 1}: `));

        if (isNaN(dato)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }

        datos.push(dato);
    }

    return datos;
}

function calcularMedia(datos) {
    const suma = datos.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / datos.length;
}

function calcularVarianza(datos, media) {
    const sumaDeCuadrados = datos.reduce((acumulador, valor) => acumulador + Math.pow(valor - media, 2), 0);
    return sumaDeCuadrados / datos.length;
}

function calcularModa(datos) {
    const frecuencia = {};
    let moda = [];
    let maxFrecuencia = 0;

    datos.forEach((dato) => {
        if (frecuencia[dato]) {
            frecuencia[dato]++;
        } else {
            frecuencia[dato] = 1;
        }

        if (frecuencia[dato] > maxFrecuencia) {
            moda = [dato];
            maxFrecuencia = frecuencia[dato];
        } else if (frecuencia[dato] === maxFrecuencia) {
            moda.push(dato);
        }
    });

    return moda.join(", ");
}

function calcularMediana(datos) {
    const datosOrdenados = datos.slice().sort((a, b) => a - b);
    const mitad = Math.floor(datosOrdenados.length / 2);

    if (datosOrdenados.length % 2 === 0) {
        return (datosOrdenados[mitad - 1] + datosOrdenados[mitad]) / 2;
    } else {
        return datosOrdenados[mitad];
    }
}

const datosIngresados = obtenerDatos();

const media = calcularMedia(datosIngresados);
console.log("Media:", media);

const varianza = calcularVarianza(datosIngresados, media);
console.log("Varianza:", varianza);

const moda = calcularModa(datosIngresados);
console.log("Moda:", moda);

const mediana = calcularMediana(datosIngresados);
console.log("Mediana:", mediana);
