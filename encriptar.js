function EncriptarTexto() {
    var textoOriginal = document.getElementById('texto').value;
    var textoEncriptado = sustituirLetras(textoOriginal);
    document.getElementById('resultado').textContent = textoEncriptado;
}

function sustituirLetras(texto) {
    var sustituciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    var textoEncriptado = "";
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if (sustituciones.hasOwnProperty(caracter)) {
            textoEncriptado += sustituciones[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }
    return textoEncriptado;
}



