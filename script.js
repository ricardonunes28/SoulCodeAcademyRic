
// 1) Crie um programa que tenha um botão em html que ao ser clicado acesse uma função que peça para o usuário digitar um numero N que seja maior que 0 e menor que 10 que corresponderá a quantidade de números do Array, que serão temperaturas. Em seguida, leia também um número M que seja maior que 0 e menor que 10 que corresponderá a quantidade de nomes que serão inseridos em um outro Array. Em seguida, utilizando o prompt de comando, receba a quantidade N de temperaturas e armazene no Array. Utilize o prompt para receber quantidade M de nomes e armazene no outro vetor. Ao final, siga as instruções abaixo:

// • Verifique se no vetor de nomes existe o nome “Eliana”
// • Exiba na tela as temperaturas maiores que 20.
// • Exiba a posição do nome “Carlos” caso exista. Caso não exista, informe ao usuário.
// • Exiba o cubo dos números do Array de números.


function aperte() {
    var numero_temperatura = 0, temperaturas = [];
    var nomes = 0, nome_guardar = [];

    var numero_temperatura = parseInt(prompt("Quantas temperaturas, iremos analisar, Digite um numero entre 0 e 10: "));
    if (numero_temperatura >= 0 || numero_temperatura < 10) {

    } else
        alert("Numero invalido , atualize a pagina")

    nomes = parseInt(prompt("Quantos nomes serão analisados, entre 0 e 10: "))
    if (nomes >= 0 || nomes < 10) {

    } else
        alert("Numero invalido , atualize a pagina");

    for (i = 0; i < numero_temperatura; i++){
        temperaturas[i] = parseInt(prompt("Qual as temperaturas: "));
    }
    for (i = 0; i < nomes; i++) {
        nome_guardar[i] = parseFloat(prompt("Quais os nomes: "));
    }

    var verifica = nome_guardar.some(elementos => elementos == "Eliana");
    console.log(verifica);

    var verifica1 = temperaturas.filter(elementos => elementos == 20)
    if (verifica1){
        document.write("<br> Existem temperaturas maiores ou igual a 20°: " verifica1)
    }else{
        document.write("<br> Não existem temperaturas maiores que 20° ")
    }

    var verifica = nome_guardar.findIndex(elementos => elementos = "carlos")
    if (verifica){
        document.write("<br> Temos um carlos em nossa lista" )    
    }else{
        document.write("<br> Não possui nenhum com o nome Carlos na lista")
    }

    var verifica = temperaturas.map(elementos => elementos * 3)
    console.log(verifica)
    document.write("<br> A temperatura ao cubo é ", verifica);
}

///////////////////////////////////////// 11/08/2021 - 13:17 ////////////////////////////////////////
