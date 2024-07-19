function DesencriptarTexto() {
    let textoEncriptado = document.getElementById('texto').value;
       let palabras = textoEncriptado.split(' ');
       
    
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].replace(/ober/g, "o");
    }
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].replace(/ufat/g, "u");
    }
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].replace(/imes/g, "i");
    }
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].replace(/ai/g, "a");
    }
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].replace(/enter/g, "e");
    }

    let textoDesencriptado = palabras.join(' ');

    document.getElementById('resultado').textContent = textoDesencriptado;

    return textoDesencriptado;
}
function copiar(){
    let resultado = document.getElementById('resultado');
    let tempInput = document.createElement('textarea');
    tempInput.value = resultado.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
