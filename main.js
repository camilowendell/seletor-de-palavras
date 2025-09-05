const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostraPalavraschave);

function mostraPalavraschave (){
 const texto = document.querySelector('#entrada-de-texto').value;
const campoResultado = document.querySelector('#resultado-palavrachave');
const mostraPalavraschave = processaTexto (texto);

campoResultado.textContent = PalavrasChave.join(",");


}
 
function processaTexto(texto) {
 let palavras = texto.split(/\P{L}+/u);
 return palavras; 

}
