"use strict";
var Utils = {
    redireccionarRespuesta: (fs, respuesta, url, titulo, parrafo, cantidadParametros, answer) => {
        var html = fs
            .readFileSync(url)
            .toString();

        if (titulo) {
            html = html.replace('%titulo%', titulo);
        }

        if (parrafo) {
            html = html.replace('%parrafo%', parrafo);
        }

        if (answer) {
            html = html.replace('%respuesta%', answer);
        }

        if (cantidadParametros) {
            html = html.replace('%cantidadParametros%', cantidadParametros)
        }

        respuesta.end(html);
    },
    getUrlRedirection: (dirname, templatePath) => `${dirname}${templatePath}`,
    isCorrectLenghtParameters: (queryParamsObject, correctLenght) => Object.keys(queryParamsObject).length === correctLenght
}

module.exports = Utils;