const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido en la base '${base}' no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido en el límite '${limite}' no es un número.`);
            return;
        }

        let data = '';

        for (let num = 1; num <= limite; num++) {
            data += [(`${base} * ${num} = ${base*num}\r\n`)];
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`table-${base}.txt`)
            console.log('El fichero ha sido guardado!'.italic);
        });
    });
}


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido en la base '${base}' no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido en el límite '${limite}' no es un número.`);
            return;
        }

        console.log('----------------------'.green);
        console.log(`tabla del ${base}`.green);
        console.log('----------------------'.green);

        for (let num = 1; num <= limite; num++) {
            console.log(`${base} * ${num} = ${base*num}`);
        }
    });
}



module.exports = {
    crearArchivo,
    listarTabla
}